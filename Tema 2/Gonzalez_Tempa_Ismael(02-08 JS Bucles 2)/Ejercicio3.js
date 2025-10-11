document.writeln("<h2>Ejercicio 3</h2>");
var Mis_notas = { mates: 9, Lengua: 6, Efisica: 5, Quimica: 9, fisica: 5, ingles: 5 };
for (var asignatura in Mis_notas) {
    document.writeln(asignatura + ": " + Mis_notas[asignatura] + "<br>");
}