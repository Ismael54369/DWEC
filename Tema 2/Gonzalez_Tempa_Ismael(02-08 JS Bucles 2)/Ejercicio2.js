document.writeln("<h2>Ejercicio 2</h2>");
const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada"];
let verde = 0;
document.writeln("<ol>");
for (let ciudad of arr1) {
    let color = "rgb(0, " + verde + ", 0)";
    document.writeln("<li style=\"color: " + color + "; font-weight: bold;\">" + ciudad + "</li>");
    verde += 40;
}
document.writeln("</ol>");