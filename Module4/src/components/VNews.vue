<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <v-button @action="openNews">
      {{ !isNewsOpen ? "Open" : "Close" }}
    </v-button>
<!--    <button class="btn" @click="openNews">-->
<!--      {{ !isNewsOpen ? "Open" : "Close" }}-->
<!--    </button>-->
    <button class="btn danger" v-if="wasRead" @click="markAsUnread">Mark as unread</button>
    <div class="content" v-if="isNewsOpen">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur excepturi quis repellendus. A
        asperiores dolorum harum natus sunt veniam? </p>
      <button class="btn primary" @click="markAsRead" v-if="!wasRead">Mark as read</button>
    </div>
  </div>
</template>

<script>
// import VButton from "@/components/UI/VButton.vue";

export default {
  name: "v-news",
  // components: {VButton},
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
  }
}
</script>

<style scoped>

</style>