<?php 

    include 'connection.php';

    $idmenu = $_POST['idmenu'];
    $sql = mysqli_query($connection, "DELETE FROM tblmenu WHERE idmenu= '$idmenu'");

    if ($sql) {
        $result['status'] = '1';
        $result['msg'] = 'Data Berhasil di Hapus';
    } else {
        $result['status'] = '0';
        $result['msg'] = 'Data Gagal di Hapus';
    }

    echo json_encode($result);

?>