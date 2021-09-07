<template>
  <div>
    <h3 class="custom-header">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "CustomContentHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.custom-header {
  font-size: 25px;
  font-weight: bold;
}
</style>
