import { foo, myFunction } from './01-miModulo.js';

// Acceder a las propiedades exportadas
const elemento = document.getElementById("aquivaelfoo");
if (elemento) {
    elemento.innerHTML = foo;
}

// Llamamos a la función
myFunction();