<template>
  <div
    class="button_wrapper"
    :class="{ button_wrapper_activeButton: active }"
    @click="setClick"
  >
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "CustomButton",
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
<style lang="scss" rel="stylesheet/scss">
@import "../../assets/styles";
.button_wrapper {
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  padding: 8px 16px;
  max-width: 160px;
  width: 160px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: $main_color;
  color: $card_color;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: $card_color;
    color: $main_color;
  }
  &_activeButton {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: $card_color;
    color: $main_color;
    font-weight: bold;
  }
}
</style>
