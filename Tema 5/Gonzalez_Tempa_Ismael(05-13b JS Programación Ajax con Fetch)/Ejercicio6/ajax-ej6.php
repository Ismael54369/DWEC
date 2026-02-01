<?php
// Verificamos si existe el valor para evitar errores
if (isset($_GET['valor'])) {
    $valor = intval($_GET['valor']); // Aseguramos que sea un entero
    $valor2 = $valor * $valor;
    echo ("El cuadrado de " . $valor . " es <b>" . $valor2 . "</b><br>");
} else {
    echo "No se recibió ningún valor.";
}
?>