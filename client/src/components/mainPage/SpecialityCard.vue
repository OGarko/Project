<template>
  <div class="spec-item-wrapper" @click="setClick">
    <span>{{ obj.speciality }}</span>
  </div>
</template>

<script>
export default {
  name: "SpecialityItem",
  props: {
    obj: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setClick() {
      this.$emit("onClick", this.obj.id);
    },
  },
};
</script>

<style>
.spec-item-wrapper {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
