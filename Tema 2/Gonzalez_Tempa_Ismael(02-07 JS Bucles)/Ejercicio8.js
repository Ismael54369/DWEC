document.writeln("<h2>Ejercicio 8</h2>");
let num = parseInt(prompt("Introduce un número:"));
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln(j * 2 - 1);
    }
    document.writeln("<br>");
}       