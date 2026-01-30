function obtenerUsuario() {
    // Asume que 'fetch' existe globalmente (Node 18+ o navegadores)
    return fetch('/usuario').then(res => res.json());
}
module.exports = { obtenerUsuario };