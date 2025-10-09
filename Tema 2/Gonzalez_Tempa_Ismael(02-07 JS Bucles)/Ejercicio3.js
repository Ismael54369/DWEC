document.writeln("<h2>Ejercicio 3</h2>");
let num = parseInt(prompt("Ingrese un número entero:"));
for (let i = 1; i <= num; i++) {
    if (!(i % 2 == 0)) {
        document.write(i + ", ");
    }
}