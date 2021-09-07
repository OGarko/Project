<template>
  <div class="loader-wrapper">
    <RingLoader :color="color" :size="size" />
  </div>
</template>

<script>
import RingLoader from "vue-spinner/src/RingLoader.vue";
export default {
  name: "Loader",
  data() {
    return {
      color: "#ff6f26",
      size: "200px",
    };
  },
  components: {
    RingLoader,
  },
};
</script>

<style lang="scss">
.loader-wrapper {
  padding: 130px;
}
</style>
