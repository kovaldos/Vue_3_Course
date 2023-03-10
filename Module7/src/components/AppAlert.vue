<template>
  <div class="alert" :class="type">
    <h3 class="alert-title">{{ title }}</h3>
    <p class="alert-text">{{ text }}</p>
    <custom-btn
        v-if="closable"
        :class="type"
        @click="$emit('close')"
    >
      Close
    </custom-btn>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  emits: ["close"],
  props: {
    title: String,
    text: String,
    closable: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(val) {
        return ["primary", "danger", "warning"].includes(val)
      }
    },
  }

}
</script>

<style scoped>

</style>