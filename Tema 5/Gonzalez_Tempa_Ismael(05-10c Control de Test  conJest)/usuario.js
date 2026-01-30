const { enviarEmail } = require('./emailService');

function registrarUsuario(email) {
    enviarEmail(email); // Esta es la función que vamos a "espiar/mockear"
    return true;
}
module.exports = { registrarUsuario };