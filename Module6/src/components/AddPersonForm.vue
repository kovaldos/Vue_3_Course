<template>
  <div class="add-person-form">
    <form action="/" class="add-person-form__form" @submit.prevent="submitForm">
      <custom-input
          v-model="firstName"
          placeholder="Enter person name"
          class="add-person-form__field"
      ></custom-input>
      <custom-btn
          :class="'add-person-form__submit-btn primary'"
          type="submit"
          :disabled="firstName === '' ? true : false"
      >
        Add person
      </custom-btn>
    </form>
  </div>
</template>

<script>


export default {
  name: "AddPersonForm",
  data() {
    return {
      firstName: "",
    }
  },
  props: {
    class: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    submitForm() {
      this.$emit("submitForm", {
        firstName: this.firstName
      });
      this.firstName = "";
    }
  }
}
</script>

<style scoped lang="scss">
.add-person-form {
  &__field {
    margin-bottom: 1rem;
  }
}
</style>