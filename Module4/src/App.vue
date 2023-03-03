<template>
  <v-header></v-header>
  <div class="container pt-1">
    <div class="card">
      <h1>Slots</h1>
    </div>
    <v-block>
      <template v-slot:heading>
        <h2>This is title</h2>
      </template>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, qui. </p>
      <!--  # - это ярлык для v-slot -->
      <template #footer>
        <hr>
          <small>This is footer</small>
      </template>
    </v-block>
  </div>
</template>

<script>

import VBlock from "@/components/VBlock.vue";

export default {
  components: {VBlock}

}

</script>
<style scoped lang="scss">

</style>
