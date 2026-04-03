<?php
$conn = new mysqli("localhost", "root", "", "gpa_db");

header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="gpa.csv"');

$output = fopen("php://output", "w");

fputcsv($output, ['Name', 'Semester', 'GPA']);

$result = $conn->query("SELECT name, semester, gpa FROM students");

while ($row = $result->fetch_assoc()) {
    fputcsv($output, $row);
}

fclose($output);
$conn->close();
?>
