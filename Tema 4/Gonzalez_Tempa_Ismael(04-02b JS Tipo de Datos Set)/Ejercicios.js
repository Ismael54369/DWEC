//Ejercicio 1
const personajeSet = new Set();

personajeSet.add("Frodo");
personajeSet.add("Aragorn");
personajeSet.add("Sauron");
personajeSet.add("Legolas");
personajeSet.add("Gandalf");

//Ejercicio 2
for (const item of personajeSet) {
  console.log(item);
}

//Ejercicio 3
console.log(personajeSet.has("Frodo")); //Devuelve true
console.log(personajeSet.has("Golum")); //Devuelve false

//Ejercicio 4
console.log(`El numero de personajes es ${personajeSet.size}`);

//Ejercicio 5
personajeSet.add("Golum");
personajeSet.add("Galadriel");

console.log("Set actualizado: ");
for (const item of personajeSet) {
  console.log(item);
}

//Ejercicio 6
console.log(
  `El personaje Golum fue eliminado: ${personajeSet.delete("Golum")}`
);

//Ejercicio 7
function union(setA, setB) {
  let union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
}

// Creamos el Set B
const setB = new Set(["Bilbo", "Gimli", "Arwen", "Frodo"]); // "Frodo" está repetido para demostrar que Set no lo duplicará

// Unimos los dos sets y mostramos el resultado
const unionDeSets = union(personajeSet, setB);

console.log("La unión de los dos sets es:");
console.log(unionDeSets);
