//PENGAMBILAN DATA DARI DATABASE
$(document).ready(function() {
    bacaData();

//EVENT btn-tambah
$('.btn-tambah').click(function() {
    tambahData();
});

//EVENT btn-ubah
$('.btn-ubah').click(function() {
    ubahData();
});

//EVENT btn-batal
$('.btn-batal').click(function() {
    bacaData();
    resetForm();
});

    //FUNCTION UNTUK MENGAMBIL SELURUH DATA DARI DATABASE
    function bacaData() {
        $('.targetData').html('');
        $('.btn-tambah').show();
        $('.btn-ubah').hide();
        $('.btn-batal').hide();

        $.ajax({
            type: 'GET',
            url: 'php/getData.php',
            dataType: 'JSON',
            success : function (response) {
                let i;
                let data = '';

                for(i = 0; i < response.length; i++) {
                    data +=
                    `
                    <tr>
                        <td>`+(i+1)+`</td>
                        <td>`+response[i].idkategori+`</td>
                        <td>`+response[i].menu+`</td>
                        <td>`+response[i].gambar+`</td>
                        <td>`+response[i].harga+`</td>
                        <td>
                            <button class='btn-update' id='`+response[i].idmenu+`'>Update</button>
                            <button class='btn-delete' id='`+response[i].idmenu+`'>Delete</button>
                        </td>
                    </tr>
                    `
                }
                $('.targetData').append(data);

                //EVENT btn-update
                $('.btn-update').click(function() {
                    getSingleData($(this).attr('id'));
                });

                //EVENT btn-delete
                $('.btn-delete').click(function() {
                    deleteData($(this).attr('id'));
                });
            }
        });
    }

    //FUNCTION UNTUK MENAMBAHKAN DATA
    function tambahData() {
        //pengambilan nilai dari form
        let idkategori = $('.txt-idkategori').val();
        let menu = $('.txt-menu').val();
        let gambar = $('.txt-gambar').val();
        let harga = $('.txt-harga').val();

        $.ajax({
            type: 'POST',
            url: 'php/addData.php',
            data : 'idkategori='+idkategori+'&menu='+menu+'&gambar='+gambar+'&harga='+harga,
            dataType : 'JSON',
            success: function (response) {
                if (response.status == '1') {
                    alert(response.msg);
                    bacaData();
                    resetForm();

                } else {
                    alert(response.msg);
                    bacaData();
                    resetForm();
                }
            }
        });
    }

    //FUNCTION UNTUK MENGAMBIL SALAH SATU DATA DARI DATABASE
    function getSingleData(x) {
        $.ajax({
            type: 'POST',
            url: 'php/getSingleData.php',
            data: 'id='+x,
            dataType: 'JSON',
            success: function (response) {
                console.log(response);
                $('.txt-idmenu').val(response.idmenu);
                $('.txt-idkategori').val(response.idkategori);
                $('.txt-menu').val(response.menu);
                $('.txt-gambar').val(response.gambar);
                $('.txt-harga').val(response.harga);

                $('.btn-tambah').hide();
                $('.btn-ubah').show();
                $('.btn-batal').show();
            }
        });
    }

    //FUNCTION UNTUK UPDATE DATA
    function ubahData() {
        let idmenu = $('.txt-idmenu').val();
        let idkategori = $('.txt-idkategori').val();
        let menu = $('.txt-menu').val();
        let gambar = $('.txt-gambar').val();
        let harga = $('.txt-harga').val();

        $.ajax({
            type : 'POST',
            url : 'php/editData.php',
            data : 'idmenu='+idmenu+'&idkategori='+idkategori+'&menu='+menu+'&gambar='+gambar+'&harga='+harga,
            dataType : 'JSON',
            success : function (response) {
                if (response.status == '1') {
                    alert(response.msg);
                    bacaData();
                    resetForm();

                } else {
                    alert(response.msg);
                    bacaData();
                    resetForm();
                }
            }
        });
    }

    function deleteData(x) {
        $.ajax({
            type: 'POST',
            url: 'php/deleteData.php',
            data: 'idmenu='+x,
            dataType: "JSON",
            success: function (response) {
                if (response.status == '1') {
                    alert(response.msg);
                    bacaData();

                } else {
                    alert(response.msg);
                    bacaData();
                }
            }
        });
    }

    //FUNCTION UNTUK MERESET FORM
    function resetForm() {
        $('.txt-idmenu').val('');
        $('.txt-idkategori').val('');
        $('.txt-menu').val('');
        $('.txt-gambar').val('');
        $('.txt-harga').val('');
    }
});
