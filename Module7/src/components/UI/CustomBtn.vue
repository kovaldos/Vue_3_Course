<template>
  <button
      class="btn"
      :type="nativeType"
      :class="cssClass"
      :disabled="disabled"
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
    cssClass: {
      type: String,
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/style.scss";
@import "@/scss/common/btn.scss";
</style>
