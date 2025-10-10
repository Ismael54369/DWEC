document.writeln("<h2>Ejercicio 13</h2>");
let entrada;
do {
    entrada = prompt("Introduce algo (escribe 'salir' para terminar):");
    if (entrada.toLowerCase() !== "salir") {
        document.writeln(entrada + "<br>");
    }
} while (entrada.toLowerCase() !== "salir");
document.writeln("Has salido del programa.");