const logger = require('./logger'); // 1. Importamos el OBJETO entero, no destruturamos

function iniciarApp() {
    // 2. Llamamos a log a través del objeto. 
    // Así, si Jest pone un espía en logger.log, esta línea lo usará.
    logger.log('Aplicación iniciada'); 
}

module.exports = { iniciarApp };