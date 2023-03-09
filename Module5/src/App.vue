<template>
  <div class="app" id="app">
    <section class="section">
      <div class="container">
        <div class="app__heading">
          <h1 class="title title--h1">Working with form</h1>
        </div>
        <div class="app__content">
          <app-form></app-form>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import AppForm from "@/components/AppForm.vue";
export default {
  components: {AppForm},
}
</script>

<style lang="scss" scoped>

</style>