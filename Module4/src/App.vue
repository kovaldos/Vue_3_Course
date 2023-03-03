<template>
  <v-header></v-header>
  <div class="container pt-1">
    <div class="card">
      <h1>Latest news <small>{{ now }}</small></h1>
      <span>viewed: {{ openRate }}</span> | <span>read: {{ readRate }}</span>
    </div>
    <v-news v-for="item in news"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :is-open="item.isOpen"
            :was-read="item.wasRead"
            @open-news="openNews"
            @mark-read="readNews"
            @mark-unread="unreadNews"
    >
    </v-news>
  </div>
</template>

<script>

import VNews from "@/components/VNews.vue";

export default {
  components: {VNews},
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {id: 1, title: "Vue 3 успешно работает!", isOpen: false, wasRead: false},
        {id: 2, title: "Vue 3 Composition API набирает обороты", isOpen: false, wasRead: false},
      ],
      openRate: 0,
      readRate: 0
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const idx = this.news.findIndex((news) => news.id === id);
      this.news[idx].wasRead = true;
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find((news) => news.id === id);
      news.wasRead = false;
      this.readRate--
    }
  }
}

</script>
<style scoped lang="scss">

</style>
