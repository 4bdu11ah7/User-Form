<?php
$pdo = new PDO("mysql:host=localhost;dbname=user_data", "root", "");
$name = $_POST['name'];
$age = $_POST['age'];

$stmt = $pdo->prepare("INSERT INTO users (name, age) VALUES (?, ?)");
$stmt->execute([$name, $age]);
?>
