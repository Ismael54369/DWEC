// Importante: jest.mock debe ir antes de los require
jest.mock('../emailService', () => ({
    enviarEmail: jest.fn() // Reemplazamos la función real por un mock vacío
}));

const { registrarUsuario } = require('../usuario');
const { enviarEmail } = require('../emailService');

test('envía email al registrar usuario', () => {
    registrarUsuario('test@mail.com');
    
    // Verificamos que el mock fue llamado
    expect(enviarEmail).toHaveBeenCalled();
    expect(enviarEmail).toHaveBeenCalledWith('test@mail.com');
});