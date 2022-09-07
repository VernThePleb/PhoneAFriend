<?php
session_start();
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
CREATE table IF NOT EXISTS `Students`
(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(20) NOT NULL,
online BOOLEAN NOT NULL);

CREATE table IF NOT EXISTS exerciseStudent
(
StudentId INT NOT NULL,
ExerciseId INT NOT NULL,
status VARCHAR(50) NOT NULL);

CREATE table IF NOT EXISTS `exercises`
(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
Name VARCHAR(20) NOT NULL,
exerciseInfo text NOT NULL);";
$stmt = $conn->prepare($sql);
$stmt->execute();