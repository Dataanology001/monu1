<?php
require_once '../includes/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = trim($_POST['name'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $phone   = trim($_POST['phone'] ?? '');
    $service = trim($_POST['service'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Basic validation
    if ($name && $email && $phone && $service && $message) {
        $stmt = $conn->prepare("INSERT INTO inquiries (name, email, phone, service, message, submitted_at) VALUES (?, ?, ?, ?, ?, NOW())");
        $stmt->bind_param('sssss', $name, $email, $phone, $service, $message);
        if ($stmt->execute()) {
            echo '<div style="padding:2rem;text-align:center;">Thank you! Your inquiry has been submitted.<br><a href="../index.html">Back to Home</a></div>';
        } else {
            echo '<div style="padding:2rem;text-align:center;">Error: Could not submit your inquiry.<br><a href="../index.html">Back to Home</a></div>';
        }
        $stmt->close();
    } else {
        echo '<div style="padding:2rem;text-align:center;">Please fill in all fields.<br><a href="../index.html">Back to Home</a></div>';
    }
} else {
    header('Location: ../index.html');
    exit();
}
?> 