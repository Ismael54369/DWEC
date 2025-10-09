document.writeln("<h2>Ejercicio 9</h2>");
let contraseña = "1234";
let verificado = false;
do {
    let intento = prompt("Introduce la contraseña (pista: 1234):");
    if (intento === contraseña) {
        document.writeln("Contraseña correcta");
        verificado = true;
    } 
} while (!verificado);
