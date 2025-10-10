document.writeln("<h2>Ejercicio 11</h2>");
let palabra = prompt("Introduce una palabra:");
for (let i = palabra.length - 1; i >= 0; i--) {
    document.writeln("<br>" + palabra.charAt(i));
}