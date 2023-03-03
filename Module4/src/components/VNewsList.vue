<template>
  <hr>
  <ul class="news-list">
    <li class="news-list__item" v-for="item in news" :class="{'read': item.wasRead}">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "v-news-list",
  inject: ["news"],
}
</script>

<style scoped lang="scss">
  .news-list {
    &__item {
      &.read {
        opacity: 0.6;
      }
    }
  }
</style>