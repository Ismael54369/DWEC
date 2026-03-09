<template>
  <h1>
    <PropsHijo nombre="Jordi Hurtado" :edad="109" estado="inmortal" />
  </h1>
</template>

<script>
import PropsHijo from './PropsHijo.vue';
export default { components: { PropsHijo } }
</script>

<style>
h1 { color: blue; }
</style>