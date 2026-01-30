// utils.js

// Ejercicio 1: Invertir cadena
function revertirCadena(str) {
    return str.split('').reverse().join('');
}

// Ejercicio 2: Filtrar pares
function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Ejercicio 3: Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Ejercicio 4: Función asíncrona (Simulando API)
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nombre: "Juan", edad: 25 });
        }, 1000);
    });
}

// Ejercicio 5: Palíndromo
function esPalindromo(str) {
    // Convertimos a minúsculas y eliminamos caracteres no alfanuméricos
    const strLimpio = str.toLowerCase().replace(/[\W_]/g, "");
    return strLimpio === strLimpio.split('').reverse().join('');
}

// Exportamos todas las funciones juntas
module.exports = { 
    revertirCadena, 
    filtrarPares, 
    celsiusToFahrenheit, 
    fetchData, 
    esPalindromo 
};