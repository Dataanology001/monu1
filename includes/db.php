<?php
// Database connection settings
$host = 'localhost';
$db   = 'smart_seva_junction'; // Change to your database name
$user = 'root'; // Change if not using default XAMPP user
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
?> 