<template>
  <button
      class="btn"
      :type="nativeType"
      :class="class"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-btn",
  props: {
    nativeType: {
      type: String,
      required: false,
      default: "button"
    },
    class: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/style.scss";
@import "@/scss/common/btn.scss";
</style>
