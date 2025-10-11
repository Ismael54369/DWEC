document.writeln("<h2>Ejercicio 1</h2>");
const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada"];
document.writeln("<ol>");
for (let ciudad of arr1) {
    document.writeln("<li style='color: green;'>" + ciudad + "</li>");
}
document.writeln("</ol>");