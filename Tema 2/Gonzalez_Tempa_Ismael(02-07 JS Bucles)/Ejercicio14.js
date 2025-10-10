document.writeln("<h2>Ejercicio 14</h2>");
let cantidad = parseFloat(prompt("Introduce la cantidad a pedir:"));
let interesAnual = parseFloat(prompt("Introduce el interés anual (en %):")) / 100;
let numAnios = parseInt(prompt("Introduce el número de años para amortizar:"));
let totalDevolver = cantidad * Math.pow((1 + interesAnual), numAnios);
let cuotaMensual = totalDevolver / (numAnios * 12);
document.writeln("Cantidad pedida: " + cantidad.toFixed(2) + "€<br>");
document.writeln("Interés anual: " + (interesAnual * 100).toFixed(2) + "%<br>");
document.writeln("Número de años: " + numAnios + "<br>");
document.writeln("Total a devolver: " + totalDevolver.toFixed(2) + "€<br>");
document.writeln("Cuota mensual: " + cuotaMensual.toFixed(2) + "€<br><br>");
let restante = totalDevolver;
let pagoAnual = cuotaMensual * 12;
for (let anio = 1; anio <= numAnios; anio++) {
    let pagado = pagoAnual * anio;
    restante -= pagoAnual;
    document.writeln("Año " + anio + ": Pagado = " + pagado.toFixed(2) + "€, Restante = " + (restante > 0 ? restante.toFixed(2) : "0.00") + "€<br>");
}