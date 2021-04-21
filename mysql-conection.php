<?php
$servername = "localhost";
$username = "sistemaAJUSTEHORAS";
$password = "P9!nqnJajR3#D3N5";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

?>