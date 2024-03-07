<?php
session_start();

header("Access-Control-Allow-Origin: *");

$pword = htmlspecialchars($_POST["pass"]);
$Uname = htmlspecialchars($_POST["uname"]);
echo $Uname;
echo $pword;
echo "<br>";

include 'dbConnect.php';
$conn = OpenCon();

$_SESSION['token'] = md5(uniqid(mt_rand(), true));

$query = "SELECT Password FROM User WHERE `Username` = '$Uname'";

$stmt = $conn->prepare($query);

if($result=mysqli_query($conn,$query))
{

	$row = mysqli_fetch_array($result);
	
	
	if(password_verify($pword,$row[0]))
	{
		
		$data = array("login" => "OK");

		header("Content-Type: application/json");
		echo json_encode($data);
		
	}
	
}


?>