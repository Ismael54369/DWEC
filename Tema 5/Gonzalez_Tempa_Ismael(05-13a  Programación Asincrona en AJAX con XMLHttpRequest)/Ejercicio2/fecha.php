<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

sleep(2);

// AQUI ESTÁ LA MODIFICACIÓN
echo "Hola, soy Ismael. "; 
echo "La fecha y hora del Servidor Web es: ";
echo date("j/n/Y G:i:s.");
?>