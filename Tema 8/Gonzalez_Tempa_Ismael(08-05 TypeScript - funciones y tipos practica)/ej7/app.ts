// 1. Declaramos el array que guardará los textos (como en el Ejemplo 1)
let listaValores: Array<string> = [];

// 2. Capturamos los elementos del HTML
// Usamos "as HTMLInputElement" etc., para decirle a TypeScript exactamente qué tipo de etiqueta es.
const inputElement = document.getElementById("miInput") as HTMLInputElement;
const btnElement = document.getElementById("miBoton") as HTMLButtonElement;
const listaDOMElem = document.getElementById("miLista") as HTMLUListElement;

// 3. Le damos vida al botón
btnElement.addEventListener("click", () => {
    // Tomamos el valor del input
    let nuevoValor: string = inputElement.value;

    // Solo lo añadimos si no está vacío
    if (nuevoValor.trim() !== "") {
        
        // Insertamos el valor en nuestro array
        listaValores.push(nuevoValor);

        // Ordenamos el array alfabéticamente
        listaValores.sort();

        // Limpiamos la lista en el HTML para volver a pintarla ordenada
        listaDOMElem.innerHTML = "";

        // Recorremos el array (como en el Ejemplo 2) y lo insertamos en el HTML
        for (let item of listaValores) {
            listaDOMElem.innerHTML += `<li>${item}</li>`;
        }

        // Vaciamos el input para que el usuario pueda escribir otra cosa
        inputElement.value = "";
    }
});