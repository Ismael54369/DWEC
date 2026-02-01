<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Detectamos si viene por GET o POST
if (isset($_GET['nombre'])) {
    echo "Saludos desde el servidor (GET): hola {$_GET['nombre']} {$_GET['apellidos']}. ";
}
else if (isset($_POST['nombre'])) {
    echo "Saludos desde el servidor (POST): hola {$_POST['nombre']} {$_POST['apellidos']}. ";
}

echo "La fecha y hora del Servidor Web: ";
echo date("j/n/Y G:i:s");
?>