// Ejercicio 2
class Alumno {
    constructor(nombre, apellidos, id, NombreModulos, notasModulos) {
        // Propiedades privadas por convención usando "_"
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._id = id;
        this.NombreModulos = NombreModulos; // Array de nombres
        this.notasModulos = notasModulos;   // Array de notas paralelo
    }

    // 1. Set y get de las propiedades nombre, apellidos, id
    get nombre() { return this._nombre; }
    set nombre(valor) { this._nombre = valor; }

    get apellidos() { return this._apellidos; }
    set apellidos(valor) { this._apellidos = valor; }

    get id() { return this._id; }
    set id(valor) { this._id = valor; }

    // 2. Mostrar modulos(id): devuelve un string con los módulos
    mostrarModulos(id) {
        let cadena = "Módulos: " + this.NombreModulos.join(", ");
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = cadena;
        }
        return cadena;
    }

    // 3. nota(nombremodulo): devuelve un string con la nota
    nota(nombremodulo) {
        let indice = this.NombreModulos.indexOf(nombremodulo);
        return indice !== -1 ? `La nota de ${nombremodulo} es ${this.notasModulos[indice]}` : "Módulo no encontrado";
    }

    // 4. media(id): muestra su media en el elemento indicado
    media(id) {
        let suma = this.notasModulos.reduce((total, n) => total + n, 0);
        let promedio = (suma / this.notasModulos.length).toFixed(2);
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = "Media: " + promedio;
        }
    }

    // 5. suspensas(id): muestra las notas menores a 5
    suspensas(id) {
        let suspensas = this.notasModulos.filter(n => n < 5);
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = "Suspensas: " + (suspensas.join(", ") || "Ninguna");
        }
    }

    // 6. Aprobadas(id): muestra las notas mayores o iguales a 5
    aprobadas(id) {
        let aprobadas = this.notasModulos.filter(n => n >= 5);
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = "Aprobadas: " + aprobadas.join(", ");
        }
    }
}

// Ejercicio 3
const clase = {
    alumnos: [],

    // 1. matricular(alumno)
    matricular: (alumno) => {
        clase.alumnos.push(alumno);
    },

    // 2. eliminar(alumnos)
    eliminar: (idAlumno) => {
        clase.alumnos = clase.alumnos.filter(a => a.id !== idAlumno);
    },

    // 3. numero(alumnos)
    numero: () => {
        return clase.alumnos.length;
    },

    // 4. Mostrar(id)
    mostrar: (id) => {
        let lista = clase.alumnos.map(a => `${a.nombre} ${a.apellidos}`).join("<br>");
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = "Lista de clase:<br>" + lista;
        }
    }
};

// Ejercicio 4
// Clase que hereda de Alumno
class AlumnoFP extends Alumno {
    constructor(nombre, apellidos, id, modulos, notas, empresaFct = "") {
        super(nombre, apellidos, id, modulos, notas); // Llama al constructor padre [cite: 421, 533]
        this.empresaFct = empresaFct;
    }

    hacerFCT(empresa) {
        this.empresaFct = empresa;
        console.log(`${this.nombre} está realizando las FCT en ${empresa}`);
    }
}

// Clase que hereda de AlumnoFP
class AlumnoFPDual extends AlumnoFP {
    constructor(nombre, apellidos, id, modulos, notas, empresaFct, empresaFctDual = "") {
        super(nombre, apellidos, id, modulos, notas, empresaFct);
        this.empresaFctDual = empresaFctDual;
    }

    hacerFCTDual(empresaDual) {
        this.empresaFctDual = empresaDual;
        console.log(`${this.nombre} está realizando la Dual en ${empresaDual}`);
    }
}

// Ejercicio 5
// Definición del Mixin 
let matricularMixin = {
    matricula() {
        console.log(`El alumno ${this.nombre} ha sido matriculado correctamente.`);
    }
};

// Asignación del Mixin a las tres clases anteriores 
Object.assign(Alumno.prototype, matricularMixin);
Object.assign(AlumnoFP.prototype, matricularMixin);
Object.assign(AlumnoFPDual.prototype, matricularMixin);