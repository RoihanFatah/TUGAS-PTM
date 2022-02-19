<?php 

    include 'connection.php';

    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $sql = mysqli_query($connection, "DELETE FROM tblmenu WHERE idmenu= $id");

        header("location:http://localhost/crud-php/selectData.php");

    }


    // echo json_encode($result);

?>