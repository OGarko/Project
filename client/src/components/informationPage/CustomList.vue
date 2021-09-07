<template>
  <div class="custom-list-wrapper">
    <div class="custom-list">
      <ul class="ul-custom-list" v-for="item in items" :key="item.id">
        <li class="li-custom-list">
          <span>{{ item.department }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomList",
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles";
.li-custom-list {
  margin-bottom: 0.7em;
}
.custom-list-wrapper {
  border-bottom: 0.1em solid $main_color;
}
</style>
