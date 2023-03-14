<template>
  <div class="custom-input" :class="{'is-invalid': error}" :data-validate-type="dataValidateType">
    <label>
      <span class="custom-input__label" v-if="label">{{ label }}</span>

      <input
          v-if="vFocus"
          v-focus
          :type="type"
          :id="id"
          :name="name"
          :placeholder="placeholder"
          :max="max"
          :min="min"
          :value="modelValue"
          @input="updateInput"
          :error="error"
      />
      <input
          v-else
          :type="type"
          :id="id"
          :name="name"
          :placeholder="placeholder"
          :max="max"
          :min="min"
          :value="modelValue"
          @input="updateInput"
          :error="error"
      />
    </label>
    <small class="custom-input__error" v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: "custom-input",
  emits: ["update:modelValue"],
  props: {
    label: {
      type: String,
      required: false,
    },
    // id: {
    //   type: String,
    //   required: false,
    // },
    name: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    placeholder: {
      type: String,
      required: false,
    },
    max: {
      type: String,
      required: false,
    },
    min: {
      type: String,
      required: false,
    },
    dataValidateType: {
      type: String,
      required: false,
    },
    modelValue: [String, Number],
    error: {
      type: String,
      required: false,
    },
    vFocus: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      id: "input-" + this.getRndInteger(1000000, 9999999),
    }
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/style.scss";
@import "@/scss/common/custom-input.scss";

.custom-input {
  padding: 0;

  & label {
    flex-direction: column;
    align-items: flex-start;

    & input {
      width: 100%;
      flex-basis: 100%;
    }
  }

  &__label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  &__error {
    color: $color-torch-red;
  }
}
</style>
