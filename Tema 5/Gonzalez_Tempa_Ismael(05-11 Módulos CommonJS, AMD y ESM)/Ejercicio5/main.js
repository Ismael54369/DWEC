import { generarNum } from './numeros.js';
import { operacionAleatoria } from './operaciones.js';

const a = generarNum();
const b = generarNum();
const calcular = operacionAleatoria(); // Esto devuelve la función (suma, resta o mult)
const resultado = calcular(a, b);

const h1 = document.createElement('h1');
h1.innerHTML = `N1: ${a} | N2: ${b} <br> Operación (${resultado.txt}): ${resultado.val}`;
document.body.appendChild(h1);