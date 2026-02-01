<?php
$hoy = date('l jS \of F Y h:i:s A');
$jsonCadena = '{ 
    "Nombre":"Joseul", 
    "Apellido":"Martin Gomez", 
    "Cargo":"IT Developer", 
    "Fecha":"' . $hoy . '"
}';
echo ($jsonCadena);
?>