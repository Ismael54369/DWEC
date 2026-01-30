export function operacionAleatoria() {
    // Retorna una función anónima dependiendo del random
    const azar = Math.random();
    if(azar < 0.33) return (a, b) => ({ txt: "Suma", val: a + b });
    if(azar < 0.66) return (a, b) => ({ txt: "Resta", val: a - b });
    return (a, b) => ({ txt: "Multiplicación", val: a * b });
}