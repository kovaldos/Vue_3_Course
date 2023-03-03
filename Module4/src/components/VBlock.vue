<template>
  <div class="card">
    <slot name="heading"></slot>
    <slot name="default">No text</slot>
    <div v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-block"
}
</script>

<style scoped>

</style>