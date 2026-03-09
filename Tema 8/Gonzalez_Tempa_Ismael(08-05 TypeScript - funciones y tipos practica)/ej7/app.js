// 1. Declaramos el array que guardará los textos (como en el Ejemplo 1)
var listaValores = [];
// 2. Capturamos los elementos del HTML
// Usamos "as HTMLInputElement" etc., para decirle a TypeScript exactamente qué tipo de etiqueta es.
var inputElement = document.getElementById("miInput");
var btnElement = document.getElementById("miBoton");
var listaDOMElem = document.getElementById("miLista");
// 3. Le damos vida al botón
btnElement.addEventListener("click", function () {
    // Tomamos el valor del input
    var nuevoValor = inputElement.value;
    // Solo lo añadimos si no está vacío
    if (nuevoValor.trim() !== "") {
        // Insertamos el valor en nuestro array
        listaValores.push(nuevoValor);
        // Ordenamos el array alfabéticamente
        listaValores.sort();
        // Limpiamos la lista en el HTML para volver a pintarla ordenada
        listaDOMElem.innerHTML = "";
        // Recorremos el array (como en el Ejemplo 2) y lo insertamos en el HTML
        for (var _i = 0, listaValores_1 = listaValores; _i < listaValores_1.length; _i++) {
            var item = listaValores_1[_i];
            listaDOMElem.innerHTML += "<li>".concat(item, "</li>");
        }
        // Vaciamos el input para que el usuario pueda escribir otra cosa
        inputElement.value = "";
    }
});
