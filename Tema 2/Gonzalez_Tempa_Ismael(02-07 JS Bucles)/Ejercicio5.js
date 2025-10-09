document.writeln("<h2>Ejercicio 5</h2>");
let cantInvertida = parseFloat(prompt("Introduce una cantidad de dinero en euros para invertir:"));
let interes = parseFloat(prompt("Introduce el interés anual (porcentaje):"));
let anyos = parseFloat(prompt("Introduce el número de años:"));
for (let i = 1; i <= anyos; i++) {
    cantInvertida += (cantInvertida * interes) / 100;
    document.writeln("Después de " + i + " años, tendrás " + cantInvertida.toFixed(2) + " euros.<br>"); 
}