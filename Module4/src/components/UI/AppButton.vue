<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
  emits: ["action"],
  props: {
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["", "primary", "danger"].includes(value);
      }
    }
  },
  methods: {
    btnLog() {
      console.log("Button log")
    }
  }
}
</script>

<style scoped lang="scss">

</style>