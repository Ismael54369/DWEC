document.writeln("<h2>Ejercicio 6</h2>");
let num = parseInt(prompt("Introduce un número:"));
let triangulo = "";
for (let i = 0; i <= num; i++) {
    for (let j = 0; j < i; j++) {
        triangulo += "*";
    }
    triangulo += "\n";
}
document.writeln("<pre>" + triangulo + "</pre>");
