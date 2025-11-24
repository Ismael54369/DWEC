//Ejercici 1
const precios = [100, 45, 30, 70, 25];
const enOferta = precios.filter(precio => precio < 50);
console.log(enOferta); 

//Ejercicio 2
const comentarios = [
  ["Buen post", "Gracias"],
  ["Interesante"],
  ["No estoy de acuerdo", ["Muy cierto", "Concuerdo"]]
];

const todosComentarios = comentarios.flat(2);
console.log(todosComentarios);

//Ejercicio 3
const usuarios = [
  { nombre: "Juan", roles: ["admin", "editor"] },
  { nombre: "María", roles: ["usuario"] },
  { nombre: "Pedro", roles: ["moderador", "editor"] }
];

const rolesPlanos = usuarios.flatMap(usuario => usuario.roles);
console.log(rolesPlanos);

//Ejercicio 4
const tareas = ["Lavar platos", "Comprar comida", "Hacer ejercicio"];

tareas.forEach((tarea, index) => {
  console.log(`${index + 1}. ${tarea}`);
});

//Ejercicio 5
const precios5 = [100, 200, 300];
const preciosConIVA = precios5.map(precio5 => precio5 * 1.21);
console.log(preciosConIVA);

//Ejercicio 6
const usuarios6 = [
  { nombre: "Juan", activo: true },
  { nombre: "María", activo: false },
  { nombre: "Pedro", activo: true }
];

const usuariosActivos = usuarios6.filter(usuario6 => usuario6.activo);
console.log(usuariosActivos);

//Ejercicio 7
const categorias = ["Electrónica", ["Teléfonos", "Computadoras"], "Ropa"];

const categoriasPlanas = categorias.flat();
console.log(categoriasPlanas);

//Ejercicio 8
const nombres = ["juan", "maría", "pedro"];

const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayus);

//Ejercicio 9
const cantidades = [10, 20, 30, 40];

cantidades.forEach(cantidad => {
  console.log(`Se vendieron ${cantidad} productos.`);
});

//Ejercicio 10
const precios10 = [50, 100, 150];

const preciosConDescuento = precios10.map(precio10 => precio10 * 0.9);
console.log(preciosConDescuento);
