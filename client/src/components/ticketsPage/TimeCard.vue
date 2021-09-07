<template>
  <div class="time-wrapper" @click="setClick">
    <p>{{ correctTime }}</p>
  </div>
</template>

<script>
export default {
  name: "TimeCard",
  props: {
    obj: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setClick() {
      this.$emit("onClick", this.obj);
    },
  },
  computed: {
    correctTime() {
      return this.obj?.time.slice(0, -3);
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/styles";
.time-wrapper {
  margin-top: 50px;
  width: 100px;
  background: $card_color;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  p {
    font-size: 20px;
  }
  &:hover {
    box-shadow: 5px 7px 14px #ff6f26 inset, 0 14px 28px rgba(0, 0, 0, 0.25);
    // 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>
