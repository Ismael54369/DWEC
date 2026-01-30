const { 
    revertirCadena, filtrarPares, celsiusToFahrenheit, fetchData, esPalindromo 
} = require('../utils'); // Ajusta la ruta si es necesario

describe("Batería de Ejercicios migrada a Jest", () => {

    test("1. Revertir cadena", () => {
        expect(revertirCadena("hola")).toBe("aloh");
        expect(revertirCadena("")).toBe("");
    });

    test("2. Filtrar pares", () => {
        // En Jest usamos toEqual para comparar contenido de Arrays/Objetos
        expect(filtrarPares([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
        expect(filtrarPares([])).toEqual([]);
    });

    test("3. Celsius a Fahrenheit", () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
        expect(celsiusToFahrenheit(100)).toBe(212);
    });

    test("4. Async/Await (fetchData)", async () => {
        const data = await fetchData();
        expect(data).toEqual({ nombre: "Juan", edad: 25 });
    });

    test("5. Palíndromo", () => {
        expect(esPalindromo("Anita lava la tina")).toBe(true);
        expect(esPalindromo("Hola mundo")).toBe(false);
    });
});