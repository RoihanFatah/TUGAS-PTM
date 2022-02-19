<?php 

    include 'connection.php';

    $id = $_GET['id'];
    $sql = mysqli_query($connection, "SELECT * FROM tblmenu WHERE idmenu = $id");
    $result = mysqli_fetch_assoc($sql);

    print_r($result);

    

?>

<h1>MENU</h1>

    
<form action="" method="post">
<table>
        <tr><td>ID Kategori : </td><td><input type="number" class="txt-idkategori" name="idkategori" value="<?php echo $result['idkategori'];?>"></td></tr>
        <tr><td>Nama Menu : </td><td><input type="text" class="txt-menu" name="menu" value="<?php echo $result['menu'];?>"></td></tr>
        <tr><td>Gambar : </td><td><input type="text" class="txt-gambar" name="gambar" value="<?php echo $result['gambar'];?>"></td></tr>
        <tr><td>Harga : </td><td><input type="number" class="txt-harga" name="harga" value="<?php echo $result['harga'];?>"></td></tr>
        <tr><td></td><td>
            <!-- <button class="btn-tambah" name="btn-tambah" >Tambah</button> -->
            <button class="btn-ubah" name="btn-submit" style="display: ;">Simpan</button>
            <button class="btn-batal" style="display: ;">Batal</button>
        </td></tr>
    </table>
    </form>

<?php 

    include 'connection.php';

    if (isset($_POST['btn-submit'])) {
        // $idmenu = $_POST['idmenu'];
        $idkategori = $_POST['idkategori'];
        $menu = $_POST['menu'];
        $gambar = $_POST['gambar'];
        $harga = $_POST['harga'];
        $sql = mysqli_query($connection, "UPDATE tblmenu SET idkategori ='$idkategori', menu ='$menu', gambar ='$gambar', harga = '$harga' WHERE idmenu =$id");

        header("location:http://localhost/crud-php/selectData.php");
    }

    

    // if ($sql) {
    //     $result['status'] = '1';
    //     $result['msg'] = 'Berhasil Mengubah Data';

    // } else {
    //     $result['status'] = '0';
    //     $result['msg'] = 'Gagal Mengubah Data';
    // }

    // echo json_encode($result);


?>