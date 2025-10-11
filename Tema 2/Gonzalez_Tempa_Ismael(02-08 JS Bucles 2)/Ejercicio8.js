document.writeln("<h2>Ejercicio 8</h2>");
let colores = [
  ["#0f0", "#00f", "#f00"],
  ["#00f", "#f00", "#0f0"],
  ["#f00", "#0f0", "#00f"]
];
document.writeln("<table width='300' height='300' border='0' cellspacing='0' cellpadding='0'>");

for (const fila of colores) {
  document.writeln("<tr>");
  for (const color of fila) {
    document.writeln("<td style='background-color:" + color + ";'></td>");
  }
  document.writeln("</tr>");
}

document.writeln("</table>");