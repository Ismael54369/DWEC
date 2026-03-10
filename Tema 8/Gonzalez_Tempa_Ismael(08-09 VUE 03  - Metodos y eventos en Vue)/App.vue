<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  <hr style="margin: 40px 0;">

  <h2>Contador (Suma de 1 en 1)</h2>
  <ContadorBoton :incremento="1" />

  <h2>Contador (Suma de 5 en 5)</h2>
  <ContadorBoton :incremento="5" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ContadorBoton from './components/ContadorBoton.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ContadorBoton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
