import { create, createReportList } from './modules/canvas.js';
import { draw, reportArea } from './modules/square.js';

// 1. Crear canvas al inicio
let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

// 2. Lógica del botón
const btn = document.getElementById('btnDibujar');
const inputColor = document.getElementById('inputColor');

btn.addEventListener('click', () => {
    // Obtener valores
    let color = inputColor.value;
    let size = 50;
    // Posición aleatoria
    let x = Math.floor(Math.random() * (480 - size));
    let y = Math.floor(Math.random() * (320 - size));

    // Dibujar
    let sq = draw(myCanvas.ctx, size, x, y, color);
    
    // Reportar en la lista
    reportArea(sq.length, reportList);
});