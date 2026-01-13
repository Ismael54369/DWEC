// EJERCICIO 1
// Creamos una nueva instancia del objeto Map
const personajes = new Map();

// Usamos el método .set(clave, valor) para añadir entradas
// Clave: Nombre (String), Valor: Ocupación (String)
personajes.set('Homer', 'Inspector de Seguridad Nuclear');
personajes.set('Marge', 'Ama de casa');
personajes.set('Bart', 'Estudiante');
personajes.set('Lisa', 'Estudiante');
personajes.set('Moe', 'Cantinero');
personajes.set('Barney', 'Cliente VIP');

console.log("--- Mapa Inicial ---");
console.log(personajes); 
// Resultado esperado: Map(6) { 'Homer' => '...', 'Marge' => '...', ... }

// EJERCICIO 2
console.log("--- Lista de Personajes y Ocupaciones ---");

// Usamos un bucle for...of para recorrer el mapa.
// Desestructuramos cada entrada en [nombre, ocupacion]
for (const [nombre, ocupacion] of personajes) {
    // Imprimimos en consola usando template literals
    console.log(`${nombre}: ${ocupacion}`);
}

// EJERCICIO 3
// Función que busca personajes que compartan una misma ocupación.
function buscarPorOcupacion(mapa, ocupacionBuscada) {
    const resultados = []; // Array para guardar los nombres

    // Recorremos el mapa
    for (const [nombre, ocupacion] of mapa) {
        // Si la ocupación coincide con la que buscamos
        if (ocupacion === ocupacionBuscada) {
            resultados.push(nombre); // Añadimos el nombre al array
        }
    }
    return resultados;
}

// Probamos la función buscando "Estudiante"
const estudiantes = buscarPorOcupacion(personajes, 'Estudiante');
console.log("--- Personajes que son Estudiantes ---");
console.log(estudiantes); // ['Bart', 'Lisa']

// EJERCICIO 4
// Función para actualizar la ocupación de un personaje.
function actualizarOcupacion(mapa, nombre, nuevaOcupacion) {
    // Verificamos si el personaje existe antes de modificarlo (opcional pero recomendado)
    if (mapa.has(nombre)) {
        mapa.set(nombre, nuevaOcupacion); // .set sobrescribe el valor si la clave ya existe
        console.log(`La ocupación de ${nombre} ha sido actualizada a: ${nuevaOcupacion}`);
    } else {
        console.log(`El personaje ${nombre} no existe en el mapa.`);
    }
}

console.log("--- Actualizando Ocupación ---");
// Cambiamos la ocupación de Homer
actualizarOcupacion(personajes, 'Homer', 'Astronauta');
// Verificamos el cambio imprimiendo el valor específico
console.log(`Homer ahora es: ${personajes.get('Homer')}`);

// EJERCICIO 5
// Función que cuenta cuántas ocupaciones distintas existen.
function contarOcupacionesUnicas(mapa) {
    // Obtenemos solo los valores (ocupaciones) del mapa
    const ocupaciones = mapa.values();
    
    // Creamos un Set con esas ocupaciones. 
    // Un Set es una colección que automáticamente elimina duplicados.
    const ocupacionesUnicas = new Set(ocupaciones);
    
    // Retornamos el tamaño del Set
    return ocupacionesUnicas.size;
}

console.log("--- Conteo de Ocupaciones Únicas ---");
// Antes teníamos 'Estudiante' repetido. El Set lo contará como 1.
console.log(`Total ocupaciones únicas: ${contarOcupacionesUnicas(personajes)}`);

// EJERCICIO 6
// Función para eliminar un personaje del mapa.
function eliminarPersonaje(mapa, nombre) {
    // El método .delete() devuelve true si borró algo, false si no lo encontró
    const eliminado = mapa.delete(nombre);
    
    if (eliminado) {
        console.log(`${nombre} ha sido eliminado del mapa.`);
    } else {
        console.log(`${nombre} no se encontró.`);
    }
}

console.log("--- Eliminando Personaje ---");
eliminarPersonaje(personajes, 'Barney');
console.log(personajes); // Barney ya no debería estar

// EJERCICIO 7
// Creamos un segundo mapa con datos nuevos y algunos conflictos (Homer)
const personajesNuevos = new Map();
personajesNuevos.set('Apu', 'Dueño del Kwik-E-Mart');
personajesNuevos.set('Homer', 'Vendedor de Quitanieves'); // Conflicto: Homer ya existe

// Función para combinar dos mapas. Si la clave se repite, suma las ocupaciones.
function combinarMapas(mapa1, mapa2) {
    // Creamos una copia del mapa 1 para no modificar el original
    const mapaCombinado = new Map(mapa1);

    // Iteramos sobre el segundo mapa
    for (const [key, value] of mapa2) {
        if (mapaCombinado.has(key)) {
            // CONFLICTO: Si la clave ya existe, obtenemos el valor actual
            const ocupacionActual = mapaCombinado.get(key);
            // Concatenamos el valor antiguo con el nuevo
            mapaCombinado.set(key, `${ocupacionActual} y ${value}`);
        } else {
            // NO CONFLICTO: Si no existe, simplemente lo añadimos
            mapaCombinado.set(key, value);
        }
    }
    return mapaCombinado;
}

console.log("--- Combinando Mapas ---");
const mapaFusionado = combinarMapas(personajes, personajesNuevos);
// Homer debería tener ambas ocupaciones
console.log('Homer:', mapaFusionado.get('Homer')); 
// Apu debería haber sido añadido
console.log('Apu:', mapaFusionado.get('Apu'));

// EJERCICIO 8
// Simulamos datos de entrada "sucios" (un array con entradas repetidas)
// Fíjate que 'Homer' y 'Bart' aparecen dos veces con la misma ocupación.
const datosSucios = [
    ['Homer', 'Inspector de Seguridad Nuclear'],
    ['Marge', 'Ama de casa'],
    ['Homer', 'Inspector de Seguridad Nuclear'], // Repetido exacto
    ['Bart', 'Estudiante'],
    ['Bart', 'Estudiante'] // Repetido exacto
];

 // Función que toma un array de entradas (algunas repetidas)
 // y devuelve un Map sin duplicados.
function limpiarDuplicados(listaDeEntradas) {
    // Al pasar un iterable (array de arrays) al constructor de Map,
    // JavaScript automáticamente maneja las claves duplicadas:
    // se queda con la última aparición de la clave.
    // Como las ocupaciones son iguales en este caso, el resultado es un mapa limpio.
    const mapaLimpio = new Map(listaDeEntradas);
    return mapaLimpio;
}

console.log("--- Limpiando Duplicados ---");
const mapaSinRepetidos = limpiarDuplicados(datosSucios);

// Imprimimos el resultado. Solo debería haber 1 Homer y 1 Bart.
console.log(mapaSinRepetidos);
// Output esperado: Map(3) { 'Homer' => '...', 'Marge' => '...', 'Bart' => '...' }