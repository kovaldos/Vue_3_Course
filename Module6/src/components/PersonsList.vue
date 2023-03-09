<template>
  <div v-if="persons.length > 1">
    <ul class="list">
      <li class="card" v-for="person in persons">
        {{ person }}
      </li>
    </ul>
  </div>
  <div class="card center" v-else>
    <p>Нет данных. Нажмите "Загрузить список" для получени яданных</p>
    <custom-btn class="primary" @click="$emit('loadData')">Загрузить список</custom-btn>
  </div>
</template>

<script>
import CustomBtn from "@/components/UI/CustomBtn.vue";

export default {
  name: "PersonsList",
  components: {CustomBtn},
  props: ["persons"],
  emits: ["loadData"]
}
</script>

<style scoped>

</style>