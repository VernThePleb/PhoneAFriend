<?php


$servername = "localhost";
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host=localhost;dbname=test", $username, $password) or die('Unable to connect');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo $e . getMessage();   
}
function getMessage() 
{
    "fuck";
}

$sql = "
UPDATE exercisestudent
SET status = 'Struggling' WHERE StudentId = $_POST['studentID'] AND ExerciseId = $_POST['exerciseID'];";
$stmt = $conn->prepare($sql);
$stmt->execute();

header("Location: main.php");