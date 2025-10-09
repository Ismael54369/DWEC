document.writeln("<h2>Ejercicio 4</h2>");
let numero = parseInt(prompt("Introduce un número:"));
for (let i = numero; i >= 0; i--) {
    if (i == 0) {
        document.writeln(i + ".");
    } else {
        document.writeln(i + ", ");
    }
}