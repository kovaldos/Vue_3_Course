<template>
  <v-header></v-header>
  <div class="container pt-1">
    <div class="card">
      <h1>Slots</h1>
    </div>
    <v-list>
      <template #default="{ idx, iter }">

        <span style="color: #c25205">
          <strong>{{ idx + 1 }}</strong>
          Item: {{ iter }}</span>
      </template>
    </v-list>
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

import VBlock from "@/components/AppBlock.vue";
import VList from "@/components/AppList.vue";

export default {
  components: {VList, VBlock}

}

</script>
<style scoped lang="scss">

</style>
