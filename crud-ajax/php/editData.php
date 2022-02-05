<?php 

    include 'connection.php';

    $idmenu = $_POST['idmenu'];
    $idkategori = $_POST['idkategori'];
    $menu = $_POST['menu'];
    $gambar = $_POST['gambar'];
    $harga = $_POST['harga'];
    $sql = mysqli_query($connection, "UPDATE tblmenu SET idkategori ='$idkategori', menu ='$menu', gambar ='$gambar', harga = '$harga' WHERE idmenu ='$idmenu'");

    if ($sql) {
        $result['status'] = '1';
        $result['msg'] = 'Berhasil Mengubah Data';

    } else {
        $result['status'] = '0';
        $result['msg'] = 'Gagal Mengubah Data';
    }

    echo json_encode($result);


?>