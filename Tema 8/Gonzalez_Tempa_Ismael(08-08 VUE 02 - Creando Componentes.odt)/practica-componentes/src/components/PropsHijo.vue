<template>
  <div>
    <p>Mi nombre es {{ nombre }}</p>
    <p>Mi edad es {{ edad }} años</p>
    <p>Soy {{ estado }} </p>
  </div>
</template>

<script>
export default {
  props: {
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    estado: { type: String, required: true }
  }
}
</script>