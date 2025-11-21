//Ejercicio 1
let productos = ["manzana", "naranja", "plátano", "pera"];

console.log(productos.includes("naranja"));      // true
console.log(productos.includes("mango", 2));     // false

//Ejercicio 2
const data = [1, 2, 3];

if (Array.isArray(data)) {
  console.log("Es un array:");
  data.forEach(item => console.log(item));
} else {
  console.log("Error: no es un array");
}

//Ejercicio 3
const campos = [true, true, false, true];

console.log(campos.every(campo => campo));  // false

//Ejercicio 4
const permisos = [false, false, true, false];

console.log(permisos.some(permiso => permiso));  // true

//Ejercicio 5
const stock = [15, 7, 25, 5];

console.log(stock.find(cantidad => cantidad < 10));  // 7

//Ejercicio 6
const prioridades = ["baja", "media", "alta", "baja"];

console.log(prioridades.findLast(prioridad => prioridad === "alta"));  // "alta"

//Ejercicio 7
const precios = [100, 50, 30, 150];

console.log(precios.findIndex(precio => precio < 50));  // 2

//Ejercicio 8
const clientes = ["regular", "VIP", "regular", "VIP"];

console.log(clientes.findLastIndex(cliente => cliente === "VIP"));  // 3

//Ejercicio 9
const productos9 = ["manzana", "naranja", "plátano"];

console.log(productos9.indexOf("plátano"));     // 2
console.log(productos9.lastIndexOf("manzana")); // 0

//Ejercicio 10
const roles = ["usuario", "usuario", "admin", "moderador"];

console.log(roles.includes("admin"));                // true
console.log(roles.some(rol => rol === "admin"));    // true

