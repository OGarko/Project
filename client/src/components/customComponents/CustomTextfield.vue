<template>
  <div class="input-wrapper">
    <label>
      {{ label }}
    </label>
    <span class="textfield" type="text" :value="item" @input="onInput">
      {{ item }}
    </span>
  </div>
</template>
<script>
export default {
  name: "CustomTextField",
  props: {
    item: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
<style lang="scss"></style>>
