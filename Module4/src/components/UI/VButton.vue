<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "v-button",
  emits: ["action"],
  props: {
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["", "primary", "danger"].includes(value);
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>