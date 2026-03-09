<template>
  <div id="app">
    <h1>Práctica VUE 02 - Componentes y Props</h1>
    <hr>

    <section class="ejercicio">
      <h2>--- Ejercicio 9: Ejemplo 1 (Componente Básico) ---</h2>
      <MiPrimerComponente />
    </section>

    <hr>

    <section class="ejercicio">
      <h2>--- Ejercicios 10, 11, 12 y 13: Ejemplo 2 (Props Padre e Hijos) ---</h2>
      <PropsPadre />
    </section>

  </div>
</template>

<script>
// 1. Importamos todos los componentes principales que vamos a usar
import MiPrimerComponente from './components/MiPrimerComponente.vue';
import PropsPadre from './components/PropsPadre.vue';

export default {
  name: 'App',
  // 2. Registramos los componentes para poder usar sus etiquetas arriba en el <template>
  components: {
    MiPrimerComponente,
    PropsPadre
  }
}
</script>

<style>
/* Estilos generales para que la práctica se vea ordenada */
#app {
  font-family: Arial, sans-serif;
  margin: 40px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  color: #2c3e50;
}

.ejercicio {
  margin-bottom: 30px;
  padding: 15px;
  background-color: white;
  border: 1px dashed #aaa;
}

.ejercicio h2 {
  color: #42b983;
  font-size: 1.2rem;
}
</style>