document.writeln("<h2>Ejercicio 4</h2>");


const arr1 = ["Málaga", "Sevilla", "Córdoba", "Huelva", "Cádiz", "Almería", "Granada"];
const arr2 = ["bonita", "guapa", "bella", "pintoresca", "hermosa"];

document.writeln("<table border='1' style='border-collapse: collapse; text-align:center;'>");
document.writeln("<tr>");

for (let ciudad of arr1) {
  document.writeln("<td style='vertical-align: top; padding:5px;'>");

  for (let adjetivo of arr2) {
    document.writeln(ciudad + " - " + adjetivo + "<br>");
  }

  document.writeln("</td>");
}

document.writeln("</tr>");
document.writeln("</table>");
