<?php
// Database configuration
$db_host = 'localhost';
$db_user = 'root';     // Default XAMPP username
$db_pass = '';         // Default XAMPP password is empty
$db_name = 'smart_seva_db';

// Create connection
try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Function to sanitize input data
function sanitize($data) {
    global $pdo;
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $pdo->quote($data);
}
?>
