<?php
header("Content-Type: application/json; charset=UTF-8");

// --- Datos simulados (como si fueran una BD) ---
$datos = [
    [1, "casa"],
    [2, ["piso", "apartamento"]],
    [3, "garaje"],
    [4, ["habitacion", "suite"]],
];

// Obtener el id desde GET
$id = isset($_GET['id']) ? intval($_GET['id']) : null;

// Si no se pasa un ID, respondemos error
if ($id === null) {
    echo json_encode([
        "error" => "Debes especificar un parámetro 'id'. Ejemplo: api.php?id=2"
    ]);
    exit;
}

// Buscar el valor del array por ID
$resultado = null;
foreach ($datos as $item) {
    if ($item[0] === $id) {
        $resultado = $item[1];
        break;
    }
}

// Si no se encontró el ID, devolver error
if ($resultado === null) {
    echo json_encode([
        "error" => "ID no encontrado"
    ]);
    exit;
}

// Respuesta correcta en JSON
echo json_encode([
    "id" => $id,
    "valor" => $resultado
]);
?>