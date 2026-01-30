import { datos, numero } from './lib.js';

const titulo = document.createElement('h1');
titulo.innerHTML = `Datos: ${datos.join(', ')} <br> Número Mágico: ${numero}`;
document.body.appendChild(titulo);