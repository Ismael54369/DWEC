//Ejercicio 1
const student = { name: "Luis", grade: 7, approved: false };

// 1. Congelarlo
Object.freeze(student);

// 2. Intentos de modificación
student.grade = 10;      // NO cambia
student.age = 20;        // NO se agrega
delete student.approved; // NO se elimina

console.log(student);

//Ejercicio 2
const config = { volume: 50, brightness: 80 };

// 1. Agregar antes de sellar
config.contrast = 100;

// 2. Sellar
Object.seal(config);

// 3. Intentos
config.volume = 30;     // Se puede cambiar
config.newProp = true;  // NO se puede agregar
delete config.brightness; // NO se puede eliminar

console.log(config);

//Ejercicio 3
function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  }

  return obj;
}

const data = {
  user: {
    name: "Ana",
    preferences: {
      theme: "dark"
    }
  }
};

deepFreeze(data);

// Intentos de cambio
data.user.name = "María";              // NO cambia
data.user.preferences.theme = "light"; // NO cambia

console.log(data);

//Ejercicio 4
const car1 = { brand: "Ford", year: 2010 };
const car2 = { brand: "Ford", year: 2010 };

Object.freeze(car1);
Object.seal(car2);

// Intentos
car1.year = 2020; // NO cambia
car2.year = 2020; // SÍ cambia

car1.color = "red"; // NO se agrega
car2.color = "red"; // NO se agrega (por seal)

delete car1.brand; // NO se elimina
delete car2.brand; // NO se elimina (por seal)

console.log(car1);
console.log(car2);

//Ejercicio 5
const state = {
  settings: {
    notifications: true,
    theme: "light"
  },
  user: {
    name: "Carlos",
    loggedIn: true
  }
};

// 1. Congelar superficialmente
Object.freeze(state);

// 2. Cambiar loggedIn
state.user.loggedIn = false; // Cambia

// 3. Cambiar theme
state.settings.theme = "dark"; // Cambia

console.log(state);

//Ejercicio 6
const book = { id: 1, title: "1984", author: "Orwell" };

// 1. Sellar
Object.seal(book);

function updateBook(obj, newTitle) {
  obj.title = newTitle;  // Se puede cambiar
  obj.pages = 300;       // NO se agrega
  delete obj.author;     // NO se elimina
}

updateBook(book, "Rebelión en la granja");

console.log(book);




