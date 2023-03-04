<template>
  <app-header></app-header>
  <div class="container pt-1">
    <div class="card">
      <app-async-component></app-async-component>
      <h1>Динамические и асинхронные компоненты</h1>
      <hr>
      <app-button
          :color="colorOne"
          @action="active = 'one'"
      >One
      </app-button>
      <app-button
          ref="myBtn"
          :color="colorTwo"
          @action="active = 'two'"
      >Two
      </app-button>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>

import AppTextOne from "@/components/AppTextOne.vue";
import AppTextTwo from "@/components/AppTextTwo.vue";
import AppAsyncComponent from "@/components/AppAsyncComponent.vue";

export default {
  components: {AppAsyncComponent, AppTextTwo, AppTextOne},
  data() {
    return {
      active: "one",
    }
  },
  computed: {
    // componentName() {
    //   if (this.active === "one") {
    //     return "app-text-one"
    //   }
    //   return "app-text-two"
    //   return `app-text-${this.active}`
    // },
    componentName: {
      get() {
        return `app-text-${this.active}`
      },
      set(value) {
        console.log("ComponentName", value);
      }
    },
    colorOne() {
      return this.active === 'one' ? 'primary' : '';
    },
    colorTwo() {
      return this.active === 'two' ? 'primary' : '';
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.componentName = "new comp name"
    // }, 1500)
    this.$refs.myBtn.btnLog()
  }
}

</script>
<style scoped lang="scss">

</style>
