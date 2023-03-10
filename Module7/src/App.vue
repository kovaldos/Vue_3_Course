<template>
  <div class="container">
    <div class="card">
      <h1 class="title">Миксины, кастомные директивы и плагины</h1>
    </div>
    <app-alert
        v-if="alert"
        type="danger"
        title="Warning!"
        text="This is a very important message! Be carefull!"
        closable
        @close="alert = false"
    >
    </app-alert>
    <div class="card">
      <custom-btn class="primary" @click="toggleAlert">{{ alert ? "Скрыть" : "Показать" }} сообщение</custom-btn>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert.vue";
import AppBlock from "@/components/AppBlock.vue";
import toggleAlert from "@/mixins/toggleAlert";

export default {
  components: {AppBlock, AppAlert},
  mixins: [toggleAlert],
}
</script>

<style lang="scss" scoped>

</style>