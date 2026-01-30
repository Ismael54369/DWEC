const { multiplicar } = require('../calculadora');

test('mock de multiplicar', () => {
    // Creamos una función mock que siempre devuelve 10, ignorando la lógica real
    const mockMultiplicar = jest.fn().mockReturnValue(10);
    
    // Usamos el mock en lugar de la original
    const resultado = mockMultiplicar(2, 5);
    
    expect(resultado).toBe(10);
    // Verificamos que se haya llamado con los argumentos correctos
    expect(mockMultiplicar).toHaveBeenCalledWith(2, 5);
});