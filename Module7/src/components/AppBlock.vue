<template>
  <app-alert
      v-if="alert"
      title="Warning!"
      text="This is a very important message! Be carefull!"
      @close="alert = false"
  >
  </app-alert>
  <div class="card">
    <custom-btn class="primary" @click="toggleAlert">{{ alert ? "Скрыть" : "Показать" }} сообщение</custom-btn>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert.vue";
import toggleAlert from "@/mixins/toggleAlert";

export default {
  components: {AppAlert},
  mixins: [toggleAlert]
}
</script>

<style lang="scss" scoped>

</style>