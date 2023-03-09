<template>
  <div class="app__form">
    <form action="/" @submit.prevent="submitFormHandler" ref="form">
      <div class="app__form-control" :class="{'is-invalid': errors.name}">
        <custom-input
            name="firstName"
            v-model.trim="firstName"
            placeholder="Enter your name"
            label="What is your name?"
            :error="errors.name">
        </custom-input>
      </div>
      <div class="app__form-control">
        <custom-input
            type="number"
            max="70"
            min="18"
            v-model.number="age"
            label="What is your age?"
            :error="errors.age">
        </custom-input>
      </div>
      <div class="app__form-control">
        <custom-select
            :isVertical=true
            label="Select your city"
            v-model="city"
            :options="options"
            id="city"
            name="selected-city"
        ></custom-select>
      </div>
      <div class="app__form-control">
        <span class="app__form-title">Are you ready to go to Tokyo?</span>
        <div class="toggle toggle--radio">
          <label class="toggle-radio__label">
            <input
                class="toggle-radio__input"
                type="radio"
                name="relocate"
                value="Yes"
                v-model="relocate">
            Yes
          </label>
        </div>
        <div class="toggle toggle--radio">
          <label class="toggle-radio__label">
            <input
                class="toggle-radio__input"
                type="radio"
                name="relocate"
                value="No"
                v-model="relocate">
            No
          </label>
        </div>
      </div>
      <div class="app__form-control">
        <span class="app__form-title">What do you know in Vue?</span>
        <div class="toggle toggle--checkbox">
          <label class="toggle-checkbox__label">
            <input
                checked
                class="toggle-checkbox__input"
                type="checkbox"
                name="skills"
                value="v-vuex"
                v-model="skills">
            Vuex
          </label>
        </div>
        <div class="toggle toggle--checkbox">
          <label class="toggle-checkbox__label">
            <input
                class="toggle-checkbox__input"
                type="checkbox"
                name="skills"
                value="v-vite"
                v-model="skills">
            Vue-Vite
          </label>
        </div>
        <div class="toggle toggle--checkbox">
          <label class="toggle-checkbox__label">
            <input
                class="toggle-checkbox__input"
                type="checkbox"
                name="skills"
                value="v-router"
                v-model="skills">
            Vue router
          </label>
        </div>
      </div>
      <div class="app__form-control">
        <span class="app__form-title">Agreement</span>
        <div class="toggle toggle--checkbox">
          <label class="toggle-checkbox__label">
            <input
                class="toggle-checkbox__input"
                type="checkbox"
                name="agree"
                value="Yes"
                v-model="agree">
            Agree with rules
          </label>
        </div>
      </div>
      <div class="app__form-control">
        <custom-btn type="submit" :class="'app-form__submit'">Submit</custom-btn>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "app-form",
  data() {
    return {
      options: [
        {
          name: "S-Petersburg",
          value: "Spb"
        },
        {
          name: "Moscow",
          value: "Msk"
        },
        {
          name: "Novosibirsk",
          value: "Nvsb"
        },
        {
          name: "Kazan",
          value: "Kzn"
        },
      ],
      firstName: "",
      age: "",
      city: "",
      relocate: null,
      skills: [],
      agree: true,
      errors: {
        name: null,
        age: null,
      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true;
      if (this.firstName.length < 1) {
        this.errors.name = `Name is required!`;
        isValid = false
      }
      if (this.age === "") {
        this.errors.age = `Age is required!`;
        isValid = false;
      } else {
        this.errors.name = null;
        this.errors.age = null;
      }
      return isValid;
    },
    submitFormHandler() {
      if (this.formIsValid()) {
        console.group("Form Data")
        console.log("Name: ", this.firstName)
        console.log("Age: ", this.age)
        console.log("City: ", this.city)
        console.log("Ready to go: ", this.relocate)
        console.log("Skills: ", this.skills)
        console.log("Agree: ", this.agree)
        console.groupEnd()
        this.$refs.form.reset();
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";

.app {
  &__form {
    &-control {
      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }

      &.is-invalid {
        & .custom-input {
          & label {
            color: red;
          }
        }
      }
    }

    &-title {
      margin-bottom: 0.5rem;
    }
  }
}

</style>