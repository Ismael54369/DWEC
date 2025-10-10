document.writeln("<h2>Ejercicio 12</h2>");
let frase = prompt("Introduce una frase: ");
let letra = prompt("Introduce una letra: ");
let contador = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
    }
}
document.writeln("La letra '" + letra + "' aparece " + contador + " veces en la frase.");