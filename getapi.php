<?php
  //header("Content-type: aplication/json; charset-ISO-8859-1");
	include_once('connect.php');

  $sql = "SELECT * FROM tb_lokasi";
	$query = mysqli_query($conn, $sql);

	$result = array();
	while($row = mysqli_fetch_array($query)){
		$result[] = $row;
	}

  print json_encode($result);
  mysqli_close($conn);
 ?>
