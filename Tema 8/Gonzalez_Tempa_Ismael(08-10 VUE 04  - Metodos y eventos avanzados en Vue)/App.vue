<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  <hr style="margin: 40px 0;">

  <todoist />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import todoist from './components/todoist.vue' // Importamos el componente

export default {
  name: 'App',
  components: {
    HelloWorld,
    todoist // Lo registramos
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
