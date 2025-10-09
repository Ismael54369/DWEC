document.writeln("<h2>Ejercicio 10</h2>");
let num = parseInt(prompt("Introduce un número:"));
let verdadero = true;
let contador = 2;
do {
    if (num % contador == 0) {
        verdadero = false;
    }
    contador++;
} while (contador < num && verdadero);

if (verdadero) {
    document.writeln("El número " + num + " es primo.");
} else {
    document.writeln("El número " + num + " no es primo.");
}