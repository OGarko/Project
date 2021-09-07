<template>
  <div
    class="custom-link-wrapper"
    :class="{ 'custom-link-wrapper_activeLink': active }"
    @click="setClick"
  >
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomLink",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/styles";
.custom-link-wrapper {
  cursor: pointer;
  color: $main_color;
  & :hover {
    color: #000000;
  }
  &_activeLink {
    color: #000000;
    font-weight: bold;
  }
}
</style>
