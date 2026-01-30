// Simulamos fetch global antes de importar la lógica
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ nombre: 'Laura' })
    })
);

const { obtenerUsuario } = require('../api');

test('obtiene usuario mockeado', async () => {
    const usuario = await obtenerUsuario();
    
    expect(usuario.nombre).toBe('Laura');
    expect(fetch).toHaveBeenCalledWith('/usuario');
    
    // Limpieza (opcional pero recomendada)
    fetch.mockClear();
});