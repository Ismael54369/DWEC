// test/utils.test.js
const { expect } = require("chai");
const { 
    revertirCadena, 
    filtrarPares, 
    celsiusToFahrenheit, 
    fetchData, 
    esPalindromo 
} = require("../utils");

describe("Batería de Ejercicios de Testing", function () {

    // --- Ejercicio 1 ---
    describe("1. Prueba revertirCadena", function () {
        it("Debe devolver 'aloh' cuando recibe 'hola'", function () {
            expect(revertirCadena("hola")).to.equal("aloh");
        });
        it("Debe devolver una cadena vacía cuando recibe una cadena vacía", function () {
            expect(revertirCadena("")).to.equal("");
        });
    });

    // --- Ejercicio 2 ---
    describe("2. Prueba filtrarPares", function () {
        it("Debe devolver [2, 4, 6] cuando recibe [1, 2, 3, 4, 5, 6]", function () {
            expect(filtrarPares([1, 2, 3, 4, 5, 6])).to.deep.equal([2, 4, 6]);
        });
        it("Debe devolver [] cuando recibe un array vacío", function () {
            expect(filtrarPares([])).to.deep.equal([]);
        });
    });

    // --- Ejercicio 3 ---
    describe("3. Prueba celsiusToFahrenheit", function () {
        it("Debe convertir 0°C a 32°F", function () {
            expect(celsiusToFahrenheit(0)).to.equal(32);
        });
        it("Debe convertir 100°C a 212°F", function () {
            expect(celsiusToFahrenheit(100)).to.equal(212);
        });
    });

    // --- Ejercicio 4 (Asíncrono) ---
    describe("4. Prueba fetchData (Async/Await)", function () {
        // Aumentamos el timeout por seguridad, aunque 1000ms suele entrar en el default de 2000ms de Mocha
        this.timeout(3000); 

        it("Debe devolver un objeto con nombre 'Juan' y edad 25", async function () {
            const data = await fetchData();
            expect(data).to.deep.equal({ nombre: "Juan", edad: 25 });
        });
    });

    // --- Ejercicio 5 ---
    describe("5. Prueba esPalindromo", function () {
        it("Debe devolver true para 'Anita lava la tina'", function () {
            expect(esPalindromo("Anita lava la tina")).to.be.true;
        });
        it("Debe devolver false para 'Hola mundo'", function () {
            expect(esPalindromo("Hola mundo")).to.be.false;
        });
    });

});