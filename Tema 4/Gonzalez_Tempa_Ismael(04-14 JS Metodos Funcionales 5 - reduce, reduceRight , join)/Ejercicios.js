//Ejercicio 1
const ventas = [100, 200, 300, 400];
// Reduce suma todos los elementos del array
const totalVentas = ventas.reduce((acumulador, venta) => acumulador + venta, 0);
console.log(totalVentas); // 1000

//Ejercicio 2
const empleados = ["Juan", "María", "Pedro", "Luis"];
// ReduceRight recorre el array de derecha a izquierda y concatena
const nombresInvertidos = empleados.reduceRight((acumulador, nombre) => acumulador + " " + nombre);
console.log(nombresInvertidos); // "Luis Pedro María Juan"

//Ejercicio 3
const cantidades = [5, 10, 20, 15];
// Suma todas las cantidades usando reduce
const totalProductos = cantidades.reduce((acumulador, cantidad) => acumulador + cantidad, 0);
console.log(totalProductos); // 50

//Ejercicio 4
const palabras = ["JavaScript", "es", "increíble"];
// join une los elementos con espacio
const oracion = palabras.join(" ");
console.log(oracion); // "JavaScript es increíble"

//Ejercicio 5
const numeros = [1, 2, 3, 4, 5];
// toString convierte el array en cadena separada por comas
const cadenaNumeros = numeros.toString();
console.log(cadenaNumeros); // "1,2,3,4,5"

//Ejercicio 6
const precios = [1000, 2000, 3000];
// toLocaleString formatea los números a moneda local
const preciosLocales = precios.map(precio => precio.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log(preciosLocales); // ["$1,000.00", "$2,000.00", "$3,000.00"]

//Ejercicio 7
const ingresosSemanales = [500, 1000, 1500, 2000];
// Suma los ingresos usando reduce
const totalIngresos = ingresosSemanales.reduce((total, ingreso) => total + ingreso, 0);
console.log(totalIngresos); // 5000

//Ejercicio 8
const productos = ["Manzana", "Naranja", "Plátano"];
// ReduceRight para concatenar en orden inverso
const resumen = productos.reduceRight((acumulador, producto) => acumulador + ", " + producto);
console.log(resumen); // "Plátano, Naranja, Manzana"

//Ejercicio 9
const numeros2 = [10, 20, 30, 40];
// toString convierte el array en cadena
const cadena = numeros2.toString();
console.log(cadena); // "10,20,30,40"

//Ejercicio 10
const precios2 = [1000, 1500, 2000];
// Convertir a USD
const preciosEnUSD = precios2.map(precio => precio.toLocaleString("en-US", { style: "currency", currency: "USD" }));
// Convertir a EUR
const preciosEnEUR = precios2.map(precio => precio.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));

console.log(preciosEnUSD); // ["$1,000.00", "$1,500.00", "$2,000.00"]
console.log(preciosEnEUR); // ["1.000,00 €", "1.500,00 €", "2.000,00 €"]
