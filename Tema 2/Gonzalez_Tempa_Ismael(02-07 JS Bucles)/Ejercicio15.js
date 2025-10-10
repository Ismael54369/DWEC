document.writeln("<h2>Ejercicio 15</h2>");
let cantidad = parseFloat(prompt("Introduzca una cantidad a invertir:"));
let interesAnual = parseInt(prompt("Introduzca el interes anual en % ")) / 100;
let numAnios = parseInt(prompt("Introduzca el numero de años en el que lo quiere invertir:"));
document.writeln("Cantidad invertida: " + cantidad.toFixed(2) + "€<br>");
document.writeln("Interés anual: " + (interesAnual * 100).toFixed(2) + "%<br>");
document.writeln("Número de años: " + numAnios + "<br>");
let capital = cantidad;
for (let i = 1; i <= numAnios; i++) {
  capital *= (1 + interesAnual);
  document.writeln("Beneficios año " + i + ": " + capital.toFixed(2) + "€<br>");
}
