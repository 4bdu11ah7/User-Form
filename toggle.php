<?php
$pdo = new PDO("mysql:host=localhost;dbname=user_data", "root", "");
$id = $_POST['id'];
$stmt = $pdo->query("SELECT status FROM users WHERE id = $id");
$current = $stmt->fetch();
$new = $current['status'] == 0 ? 1 : 0;

$pdo->prepare("UPDATE users SET status = ? WHERE id = ?")->execute([$new, $id]);
?>
