<?php 

    $connection = mysqli_connect('localhost', 'root', '', 'dbrestoran');

    if (mysqli_connect_errno()) {
        echo 'KONEKSI DATABASE GAGAL'. mysqli_connection_error();
    }

?>