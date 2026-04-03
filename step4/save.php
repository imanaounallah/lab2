<?php
$conn = new mysqli("localhost", "root", "", "gpa_db");

$name = $_POST['name'];
$semester = $_POST['semester'];
$gpa = $_POST['gpa'];

$sql = "INSERT INTO students (name, semester, gpa)
        VALUES ('$name', '$semester', '$gpa')";

if ($conn->query($sql) === TRUE) {
    echo "Saved";
} else {
    echo "Error";
}

$conn->close();
?>
