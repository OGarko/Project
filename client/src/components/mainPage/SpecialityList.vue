<template>
  <div class="speciality-list-wrapper">
    <div class="spec-card-wrapper" v-for="el in arr" :key="el.id">
      <SpecialityCard :obj="el" @onClick="toSpecialistyPage" />
    </div>
  </div>
</template>

<script>
import SpecialityCard from "./SpecialityCard";
export default {
  name: "SpecialityList",
  components: { SpecialityCard },
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toSpecialistyPage(id_spec) {
      this.$router.push({ name: "specialisty", query: { spec: id_spec } });
    },
  },
};
</script>

<style lang="scss">
.speciality-list-wrapper {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  cursor: pointer;
  .spec-card-wrapper {
    min-width: 275px;
    width: 275px;
    min-height: 100px;
    box-sizing: border-box;
    margin: 0 25px 25px 0;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 20px;
    background: #fff;
    position: relative;
    text-align: center;

    &:hover {
      box-shadow: 10px 12px 28px #ff6f26 inset, 0 14px 28px rgba(0, 0, 0, 0.25);
    }
    span {
      padding-left: 20px;
      font-size: 19px;
      font-weight: normal;
    }
  }
}
</style>
