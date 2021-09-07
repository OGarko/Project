<template>
  <select class="custom-select" @change="changeOption">
    <option :value="0">Все</option>
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.sname }} {{ option.fname }} {{ option.mname }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/styles";
.custom-select {
  min-width: 300px;
  padding: 0 10px;
  border: none;
  height: 50px;
  outline: none;
  font-size: 15px;
}
</style>
