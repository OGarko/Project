<template>
  <div class="v-btn" @click="setClick">
    <i class="material-icons">{{ iconBtn }}</i>
  </div>
</template>
<script>
export default {
  name: "CustomBtn",
  props: {
    iconBtn: {
      type: String,
      required: true,
      default: "",
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
.v-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 3px;
  cursor: pointer;
  &:hover {
    color: #ff6f26;
  }
  &_activeBtn {
    color: #ff6f26;
  }
}
.material-icons {
  font-size: 23px;
}
</style>
