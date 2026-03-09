<template>
  <div>
    <h1 class="color-h1">{{ cabecera1 }}</h1>
    <h2 class="color-h2">{{ cabecera2 }}</h2>
    <h3 class="color-h3">{{ cabecera3 }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    cabecera1: { type: String, required: true },
    cabecera2: { type: String, required: true },
    cabecera3: { type: String, required: true }
  }
}
</script>

<style>
.color-h1 { color: red; }
.color-h2 { color: blue; }
.color-h3 { color: green; }
</style>