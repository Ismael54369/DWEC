// Ejercicio 1
const alumno = {
    // Propiedades básicas 
    nombre: "Juan",
    apellidos: "García Pérez",
    id: "alu-001",
    NombreModulos: ["DWEC", "DWES", "DIW"], // Array de nombres
    notasModulos: [8, 4, 7], // Array de notas paralelo 

    // Métodos Get y Set [cite: 283]
    getNombre: function() { return this.nombre; },
    setNombre: function(nom) { this.nombre = nom; },
    getApellidos: function() { return this.apellidos; },
    setApellidos: function(ape) { this.apellidos = ape; },
    getId: function() { return this.id; },
    setId: function(val) { this.id = val; },

    // Muestra los módulos en el elemento HTML con el id pasado
    mostrarModulos: function(idElemento) {
        document.getElementById(idElemento).innerHTML = "Módulos: " + this.NombreModulos.join(", ");
    },

    // Busca la nota correspondiente a un nombre de módulo 
    nota: function(nombreModulo) {
        let indice = this.NombreModulos.indexOf(nombreModulo);
        return indice !== -1 ? this.notasModulos[indice] : "Módulo no encontrado";
    },

    // Calcula la media y la muestra en el HTML 
    media: function(idElemento) {
        let suma = this.notasModulos.reduce((a, b) => a + b, 0);
        let promedio = suma / this.notasModulos.length;
        document.getElementById(idElemento).innerHTML = "Media: " + promedio.toFixed(2);
    },

    // Filtra y muestra solo las notas menores a 5 
    suspensas: function(idElemento) {
        let suspensos = this.notasModulos.filter(n => n < 5);
        document.getElementById(idElemento).innerHTML = "Suspensas: " + suspensos.join(", ");
    },

    // Filtra y muestra las notas iguales o mayores a 5 
    aprobadas: function(idElemento) {
        let aprobados = this.notasModulos.filter(n => n >= 5);
        document.getElementById(idElemento).innerHTML = "Aprobadas: " + aprobados.join(", ");
    }
};

// Ejercicio 2
const alumnoFlecha = {
    // Propiedades
    nombre: "Ana",
    apellidos: "López Martínez",
    id: "alu-002",
    NombreModulos: ["DWEC", "DIW", "DWES"],
    notasModulos: [9, 10, 4],

    // 1. Setters y Getters usando ()
    getNombre: () => alumnoFlecha.nombre,
    setNombre: (nom) => { alumnoFlecha.nombre = nom; },
      
    getApellidos: () => alumnoFlecha.apellidos,
    setApellidos: (ape) => { alumnoFlecha.apellidos = ape; },
      
    getId: () => alumnoFlecha.id,
    setId: (val) => { alumnoFlecha.id = val; },

    // 2. Mostrar modulos(id)
    // Muestra los nombres de los módulos en el elemento HTML con dicho id
    mostrarModulos: (id) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = `Módulos: ${alumnoFlecha.NombreModulos.join(", ")}`;
    },

    // 3. nota(nombremodulo) 
    // Busca la nota en el array paralelo basándose en el nombre del módulo
    nota: (nombreModulo) => {
      const indice = alumnoFlecha.NombreModulos.indexOf(nombreModulo);
      return indice !== -1 ? alumnoFlecha.notasModulos[indice] : "No encontrado";
    },

    // 4. media(id)
    // Calcula el promedio y lo muestra en el InnerElement
    media: (id) => {
      const suma = alumnoFlecha.notasModulos.reduce((total, n) => total + n, 0);
      const resultado = suma / alumnoFlecha.notasModulos.length;
      const el = document.getElementById(id);
      if (el) el.innerHTML = `Media: ${resultado.toFixed(2)}`;
    },

    // 5. suspensas(id) 
    // Filtra las notas menores a 5 y las muestra 
    suspensas: (id) => {
      const lista = alumnoFlecha.notasModulos.filter(n => n < 5);
      const el = document.getElementById(id);
      if (el) el.innerHTML = `Notas Suspensas: ${lista.length > 0 ? lista.join(", ") : "Ninguna"}`;
    },

    // 6. Aprobadas(id) 
    // Filtra las notas mayores o iguales a 5 y las muestra 
    aprobadas: (id) => {
      const lista = alumnoFlecha.notasModulos.filter(n => n >= 5);
      const el = document.getElementById(id);
      if (el) el.innerHTML = `Notas Aprobadas: ${lista.join(", ")}`;
    }
};

// Ejercicio 3
// Ejemplo de ejecución para mostrar cada elemento
console.log("Nombre completo:", alumno.getNombre(), alumno.getApellidos());
console.log("Nota de DWEC:", alumno.nota("DWEC"));

// Suponiendo que existen estos divs en el HTML:
// <div id="modulos"></div>, <div id="media"></div>, <div id="estado"></div>
alumno.mostrarModulos("modulos");
alumno.media("media");
alumno.suspensas("estado");

// Ejercicio 4
const clase = {
    listaAlumnos: [], // Array que contendrá objetos alumno 

    // Método anónimo para añadir alumno [cite: 293]
    matricular: function(nuevoAlumno) {
      this.listaAlumnos.push(nuevoAlumno);
    },

    // Elimina alumnos por nombre [cite: 294]
    eliminar: function(nombre) {
      this.listaAlumnos = this.listaAlumnos.filter(a => a.nombre !== nombre);
    },

    // Devuelve la cantidad de alumnos [cite: 295]
    numero: function() {
      return this.listaAlumnos.length;
    },

    // Muestra la lista en un elemento HTML [cite: 296]
    mostrar: function(idElemento) {
      let contenido = this.listaAlumnos.map(a => a.nombre).join("<br>");
      document.getElementById(idElemento).innerHTML = "Lista de Clase:<br>" + contenido;
    }
};

// Ejercicio 5
let instituto = {
  nombre: "IES San Clemente",
  direccion: "Santiago",
  id: "inst-01"
};

// Ejercicio 6
instituto.cambiarnombre = function(nuevaDir) {
  this.direccion = nuevaDir; // 'this' funciona correctamente
};
instituto.mostrar = function(idElemento) {
  document.getElementById(idElemento).innerText = "Instituto: " + this.nombre;
};

// Ejercicio 7
instituto.cambiarnombreFlecha = (nuevaDir) => {
  instituto.direccion = nuevaDir; // Usamos el nombre del objeto directamente
};
instituto.mostrarFlecha = (idElemento) => {
  document.getElementById(idElemento).innerText = "Inst (Flecha): " + instituto.nombre;
};

// Ejercicio 9
// Usando el constructor del Ejercicio 1 (suponiendo que fuera una función)
function AlumnoConstructor(nombre) {
  this.nombre = nombre;
}

// Añadiendo método dinámicamente al prototipo
AlumnoConstructor.prototype.saludar = function() {
  return "Hola, soy " + this.nombre;
};

// Añadiendo otro método [cite: 227]
AlumnoConstructor.prototype.despedirse = function() {
  console.log(this.nombre + " ha salido de clase.");
};

// Ejercicio 10
function organizeInventory(inventory) {
  // Si el array está vacío, devolvemos un objeto vacío
  if (inventory.length === 0) return {};

  // Reducimos el array a un único objeto organizado 
  return inventory.reduce((acc, item) => {
    const { name, quantity, category } = item;

    // Si la categoría no existe en nuestro resultado, la creamos 
    if (!acc[category]) {
      acc[category] = {};
    }

    // Si el juguete ya existe en esa categoría, sumamos la cantidad 
    if (acc[category][name]) {
      acc[category][name] += quantity;
    } else {
      // Si es nuevo, lo inicializamos con su cantidad 
      acc[category][name] = quantity;
    }

    return acc;
  }, {});
}

// Ejemplo de uso con los datos proporcionados 
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
  { name: 'racket', quantity: 7, category: 'sports' }
];

console.log(organizeInventory(inventory)); 
// Salida: { toys: { doll: 5, car: 5 }, sports: { ball: 2, racket: 11 } }