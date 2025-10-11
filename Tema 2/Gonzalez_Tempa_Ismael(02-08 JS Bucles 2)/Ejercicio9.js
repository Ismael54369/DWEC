document.writeln("<h2>Ejercicio 9</h2>");
let colores = [
  ["#f0f", "#f0f", "#f0f", "#f0f", "#f0f", "#f0f"],
  ["#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0"],
  ["#ff0", "#0ff", "#0ff", "#0ff", "#0ff", "#ff0"],
  ["#ff0", "#0ff", "#0ff", "#0ff", "#0ff", "#ff0"],
  ["#ff0", "#ff0", "#f0f", "#f0f", "#ff0", "#ff0"],
  ["#f0f", "#f0f", "#f0f", "#f0f", "#f0f", "#f0f"]
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