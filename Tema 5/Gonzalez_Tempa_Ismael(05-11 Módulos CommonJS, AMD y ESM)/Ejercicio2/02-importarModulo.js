import { foo, myFunction } from './02-miModulo.js';

const caja = document.getElementById("aquivaelfoo");

// Mostramos la constante
caja.innerHTML = foo;

// Añadimos el resultado de la función
// Nota: += añade al contenido existente
caja.innerHTML += "<br>" + myFunction();