<?php 

    include 'connection.php';

    $idkategori = $_POST['idkategori'];
    $menu = $_POST['menu'];
    $gambar = $_POST['gambar'];
    $harga = $_POST['harga'];
    $sql = mysqli_query($connection, "INSERT INTO tblmenu VALUES (null, '$idkategori', '$menu', '$gambar', '$harga')");

    if ($sql) {
        $result['status'] = '1';
        $result['msg'] = 'Berhasil Menambahkan Data';
    } else {
        $result['status'] = '0';
        $result['msg'] = 'Gagal Menambahkan Data';
    }

    echo json_encode($result);

?>