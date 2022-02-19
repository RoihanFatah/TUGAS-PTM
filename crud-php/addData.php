<form action="" method="post">
<table>
        <tr><td>ID Menu : </td><td><input type="number" class="txt-idmenu" name="idmenu" value="" disabled></td></tr>
        <tr><td>ID Kategori : </td><td><input type="number" class="txt-idkategori" name="idkategori" value=""></td></tr>
        <tr><td>Nama Menu : </td><td><input type="text" class="txt-menu" name="menu" value=""></td></tr>
        <tr><td>Gambar : </td><td><input type="text" class="txt-gambar" name="gambar" value=""></td></tr>
        <tr><td>Harga : </td><td><input type="number" class="txt-harga" name="harga" value=""></td></tr>
        <tr><td></td><td>
            <button class="btn-tambah" name="btn-tambah" >Tambah</button>
            <button class="btn-ubah" style="display: none;">Simpan</button>
            <button class="btn-batal" style="display: none;">Batal</button>
        </td></tr>
    </table>
    </form>

<?php 

    include 'connection.php';

    if (isset($_POST['btn-tambah'])) {
    $idmenu = $_POST['idmenu'];
    $idkategori = $_POST['idkategori'];
    $menu = $_POST['menu'];
    $gambar = $_POST['gambar'];
    $harga = $_POST['harga'];
    $sql = mysqli_query($connection, "INSERT INTO tblmenu VALUES (null, '$idkategori', '$menu', '$gambar', '$harga')");

    header("location:http://localhost/crud-php/selectData.php");

    // if ($sql) {
    //     $result['status'] = '1';
    //     $result['msg'] = 'Berhasil Menambahkan Data';
    // } else {
    //     $result['status'] = '0';
    //     $result['msg'] = 'Gagal Menambahkan Data';
    // }

    // echo json_encode($result);
}

// header("location :http://localhost/crud-php/addData.php");
?>

