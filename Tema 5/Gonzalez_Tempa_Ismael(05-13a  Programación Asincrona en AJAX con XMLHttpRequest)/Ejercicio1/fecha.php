<?php
// Evitar cache
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Retraso simulado de 2 segundos
sleep(2);

// Respuesta
echo "La fecha y hora del Servidor Web: ";
echo date("j/n/Y G:i:s.");
?>