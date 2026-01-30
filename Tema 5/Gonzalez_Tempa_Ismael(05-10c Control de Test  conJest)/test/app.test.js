const logger = require('../logger'); // Importamos el objeto para espiarlo
const { iniciarApp } = require('../app');

test('verifica que se llame a log', () => {
    // Espiamos el método 'log' del objeto 'logger'
    const spy = jest.spyOn(logger, 'log').mockImplementation(() => {});
    
    iniciarApp(); // Al ejecutar esto, llamará a logger.log()
    
    expect(spy).toHaveBeenCalledWith('Aplicación iniciada');
    
    spy.mockRestore();
});