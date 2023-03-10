<template>
  <div v-if="persons.length > 0">
    <ul class="list persons__list">
      <li class="card persons__list-item" v-for="person in persons" :key="person.id">
        {{ person.firstName }}
        <custom-btn
            class="danger"
            @click="$emit('remove', person.id)"
        >Удалить
        </custom-btn>
      </li>
    </ul>
  </div>
  <div class="card center" v-else>
    <p>Нет данных. Нажмите "Загрузить список" для получения данных</p>
    <custom-btn class="primary" @click="$emit('loadData')">Загрузить список</custom-btn>
  </div>
</template>

<script>
import CustomBtn from "@/components/UI/CustomBtn.vue";

export default {
  name: "PersonsList",
  components: {CustomBtn},
  props: ["persons"],
  emits: ["loadData", "remove"]
}
</script>

<style scoped lang="scss">
.persons__list {
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
}
</style>