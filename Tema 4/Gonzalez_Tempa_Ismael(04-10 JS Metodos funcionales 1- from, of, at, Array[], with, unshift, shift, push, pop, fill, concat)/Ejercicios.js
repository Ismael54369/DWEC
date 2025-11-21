//Ejercicio 1
let inventario = Array.of(1, 2, 3, 4, 5); 
inventario.fill(7, 2, 5);         
inventario.unshift(0, 0);         
inventario.pop();                 
inventario = inventario.concat([10, 20, 30]);
console.log(inventario);

//Ejercicio 2
let empleados = Array.from("abcdef");   
let tercero = empleados.at(2);          
let ultimo = empleados.at(-1);          

empleados = empleados.with(1, "X");     
empleados.shift();                      
empleados.push("Y", "Z");               

console.log(empleados);

//Ejercicio 3
let notas = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

notas.fill(99, 4, 8);           
notas.unshift(5, 6, 7);         
notas.pop();                    
notas.shift();                  

console.log(notas);

//Ejercicio 4
let precios = [100, 200, 300, 400];

precios.push(500, 600);         
precios.shift();                
precios = precios.with(2, 999);
precios = precios.concat([700, 800, 900]);

console.log(precios);

//Ejercicio 5
let texto = Array.from("hello world");

let quinto = texto.at(4);      
let ultimo5 = texto.at(-1);     

texto.unshift("#");            

texto.fill("*", 6, 7);         

texto = texto.concat(["!", "!", "!"]);

console.log(texto);

//Ejercicio 6
let pedidos = [1, 2, 3, 4, 5, 6];

let tercero6 = pedidos.at(2);    
let ultimoPedido = pedidos.at(-1);

pedidos = pedidos.with(0, 0);   
pedidos.fill(8, 1, 4);          
pedidos.shift();                
pedidos.pop();                  

pedidos.push(7, 8, 9);

console.log(pedidos);