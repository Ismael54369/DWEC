<template>
  <div class="contenedor">
    <div class="botones">
      <button @click="decrementar">Decrementar (-{{ incremento }})</button>
      <button @click="reiniciar">Reiniciar</button>
      <button @click="incrementar">Incrementar (+{{ incremento }})</button>
    </div>

    <div class="resultados">
      <p>El contador es: <span style="color: red;">{{ cuenta }}</span></p>
      <p>El doble es: <span style="color: blue;">{{ doble }}</span></p>
      <p>El triple es: <span style="color: green;">{{ triple }}</span></p>
      <p>El cuádruple es: <span style="color: orange;">{{ cuadruple }}</span></p>
      <p>El cuadrado es: <span style="color: purple;">{{ cuadrado }}</span></p>
      <p>El cubo es: <span style="color: brown;">{{ cubo }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  // Ejercicio 6: Añadimos el prop 'incremento'
  props: {
    incremento: {
      type: Number,
      default: 1 // Si no le pasamos nada, sumará de 1 en 1 por defecto
    }
  },
  data() { 
    return { 
      cuenta: 0 
    }; 
  },
  methods: {
    // Ejercicio 5 y 6: Funciones modificadas para usar el 'prop'
    incrementar() {
      this.cuenta += this.incremento; 
    },
    decrementar() {
      this.cuenta -= this.incremento;
    },
    reiniciar() {
      this.cuenta = 0;
    }
  },
  computed: {
    // Ejercicio 4: Nuevas funciones matemáticas
    doble() { return this.cuenta * 2; },
    triple() { return this.cuenta * 3; },
    cuadruple() { return this.cuenta * 4; },
    cuadrado() { return this.cuenta ** 2; }, // Usamos ** para elevar a una potencia
    cubo() { return this.cuenta ** 3; }
  }
}
</script>

<style>
/* Estilos generales y del Ejercicio 3 */
.contenedor {
  text-align: center;
  font-family: sans-serif;
}
.botones button { 
  font-size: 1.2em; 
  border: 1px solid black; 
  background-color: aqua; 
  padding: 10px 15px; 
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
}
.botones button:hover {
  background-color: #00cccc;
}
.resultados p {
  font-size: 1.5em;
  font-weight: bold;
  margin: 5px 0;
}
</style>