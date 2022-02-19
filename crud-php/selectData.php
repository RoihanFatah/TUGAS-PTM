<h1>MENU</h1>
<table border="1">
    <?php 
    
        include 'connection.php';

        $sql = mysqli_query($connection, "SELECT * FROM tblmenu");
        $no = 1;
    
    ?>
    <h3><a href="addData.php">Tambah Data</a></h3>
    <thead>
        <tr>
            <th>No.</th>
            <th>Menu</th>
            <th>Harga</th>
            <th>Gambar</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
    </thead>
    <tbody>
        <?php if(!empty($sql)) {?>
        <?php foreach ($sql as $r):?>
            <tr>
                <td><?php echo $no++;?></td>
                <td><?php echo $r['menu']?></td>
                <td><?php echo $r['harga']?></td>
                <td><?php echo $r['gambar']?></td>
                <td><a href="deleteData.php?id=<?php echo $r['idmenu']?>">Delete</a></td>
                <td><a href="editData.php?id=<?php echo $r['idmenu']?>">Update</a></td>
            </tr>
        <?php endforeach?>
        <?php }?>
    </tbody>
</table>