<template>
  <div class="select" :class="[isVertical ? 'col' : 'row']">
    <label class="select__label" :for="id" v-if="label">{{ label }}</label>
    <select class="select__native" @change="changeOption" :id="id" :name="name">
      <option disabled selected value="">select option...</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    isVertical: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/style.scss";
//@import "@/scss/mixins.scss";

.select {
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 0.5rem;
  &.col {
    flex-direction: column;
  }
  &__native {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border-color: $color-outrageous-orange;
    font-size: 1rem;
  }
}
</style>
