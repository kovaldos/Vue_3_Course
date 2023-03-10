<template>
  <div class="alert"
       v-if="alert"
       :class="alert.type"
  >
    <h3>{{ alert.title }}</h3>
    <p>{{ alert.text }}</p>
    <custom-btn
        :class="alert.type"
        @click="$emit('closeAlert')"
    >
      Закрыть
    </custom-btn>
  </div>
</template>

<script>

export default {
  name: "AppAlert",
  emits: ["closeAlert"],
  props: ["alert"]
}
</script>

<style scoped>

</style>