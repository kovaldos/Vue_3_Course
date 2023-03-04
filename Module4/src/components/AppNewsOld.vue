<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <app-button @action="openNews">
      {{ !isNewsOpen ? "Open" : "Close" }}
    </app-button>
    <!--    <button class="btn" @click="openNews">-->
    <!--      {{ !isNewsOpen ? "Open" : "Close" }}-->
    <!--    </button>-->
    <app-button
        color="danger"
        v-if="wasRead"
        @action="markAsUnread"
    >Mark as unread
    </app-button>
    <hr>
    <div class="content" v-if="isNewsOpen">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur excepturi quis repellendus. A
        asperiores dolorum harum natus sunt veniam? </p>
      <app-button
          color="primary"
          @action="markAsRead"
          v-if="!wasRead"
      >Mark as read
      </app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>

import AppNewsList from "@/components/AppNewsList.vue";

export default {
  name: "v-news",
  components: {AppNewsList},
  // props: ["title"],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    },
    wasRead: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emits: ["open-news"],
  // Пример эмита с валидатором
  emits: {
    "open-news": null,
    "mark-read"(id) {
      if (id) {
        return true
      }
      console.warn("ID is required")
      return false
    },
    "mark-unread"(id) {
      if (id) {
        return true
      }
      console.warn("ID is required")
      return false
    }
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    openNews() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news")
      }
    },
    markAsRead() {
      this.isNewsOpen = false;
      this.$emit("mark-read", this.id)

    },
    markAsUnread() {
      this.$emit("mark-unread", this.id)
    }
  },
}
</script>

<style scoped>

</style>