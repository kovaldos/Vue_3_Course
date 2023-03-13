<template>
  <div class="container">
    <div class="card" v-if="show">
      <h1 class="title" v-color:[type].blink.hover="currentColor ? customColor : customColor2">Миксины, кастомные директивы и
        плагины</h1>
      <custom-btn @click="toggleColor">Сделать {{ currentColor ? customColor2 : customColor }}</custom-btn>
      <custom-btn @click="type = type === 'color' ? 'backgroundColor' : 'color'">Изменить тип</custom-btn>
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
    <div class="card">
      <custom-input
          label="Здесь кастомная директива v-focus"
          :vFocus="true"
      ></custom-input>
    </div>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert.vue";
import AppBlock from "@/components/AppBlock.vue";
import toggleAlert from "@/mixins/toggleAlert";
import CustomBtn from "@/components/UI/CustomBtn.vue";
import CustomInput from "@/components/UI/CustomInput.vue";

export default {
  components: {CustomInput, CustomBtn, AppBlock, AppAlert},
  mixins: [toggleAlert],
  data() {
    return {
      customColor: "darkred",
      customColor2: "darkblue",
      currentColor: true,
      type: "color",
      show: true,
      userName: ""
    }
  },
  methods: {
    toggleColor() {
      this.currentColor = !this.currentColor
    },

  },
  // mounted() {
  //   setTimeout(() => {
  //     this.show = false;
  //   }, 1500);
  // }
}
</script>

<style lang="scss" scoped>

</style>