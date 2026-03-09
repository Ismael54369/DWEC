<template>
  <div>
    <h1>Este es mi componente</h1> <br>
    <h2>{{ subtitulo }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subtitulo: 'Soy el subtitulo del componente'
    }
  }
}
</script>