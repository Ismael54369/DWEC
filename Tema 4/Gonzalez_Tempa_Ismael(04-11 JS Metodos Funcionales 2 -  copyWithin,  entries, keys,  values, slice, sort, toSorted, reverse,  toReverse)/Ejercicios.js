//Ejercicio 1
let filas = [10, 20, 30, 40, 50];

filas.copyWithin(0, 2, 5);  // Copia 30,40,50 al inicio
filas.reverse();            // Invierte el array
let resultado = filas.slice(0, 3);  // Toma los 3 primeros

console.log(resultado);

//Ejercicio 2
let productos = ["manzana", "naranja", "plátano"];

for (let [indice, nombre] of productos.entries()) {
  console.log(`Producto ${indice}: ${nombre}`);
}

let claves = [...productos.keys()];
console.log("Claves de productos:", claves);

//Ejercicio 3
let notas = [85, 75, 95, 65, 90];

let iterador = notas.values();  
// (Solo se obtiene; no es necesario mostrarlo)

notas.sort((a, b) => b - a);     // Mayor a menor

let top3 = notas.slice(0, 3);    // 3 mejores notas

console.log(top3);

//Ejercicio 4
let pedidos = [1003, 1001, 1002, 1005, 1004];

pedidos.sort();        // Orden ascendente
pedidos.reverse();     // Descendente
let prioridad = pedidos.slice(0, 3);

console.log(prioridad);

//Ejercicio 5
let empleados = [300, 200, 400, 100];

let ordenAsc = empleados.toSorted();    
let invertido = ordenAsc.toReversed();  
let seleccion = invertido.slice(0, 2);  

console.log(seleccion);

//Ejercicio 6
let precios = [50, 30, 20, 10, 40];

precios.copyWithin(3, 1, 3);   // Copia índices 1 y 2 a 3 y 4
precios.sort((a, b) => a - b); // Orden menor → mayor
let baratos = precios.slice(0, 3);

console.log(baratos);

//Ejercicio 7
let configs = ["pantalla completa", "sonido activado", "modo oscuro"];

let claves7 = configs.keys();
let valores = configs.values();

let i = 0;
for (let valor of valores) {
  console.log(`Clave ${i}: ${valor}`);
  i++;
}

//Ejercicio 8
let comentarios = [5003, 5001, 5002, 5005, 5004];

let ordenados = comentarios.toSorted();  
ordenados.reverse();                    
let ultimos = ordenados.slice(0, 2);    

console.log(ultimos);
