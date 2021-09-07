<template>
  <div>
    <div v-for="el in arr" :key="el.id">
      <DoctorCard :obj="el" @onClick="setClick" />
    </div>
  </div>
</template>

<script>
import DoctorCard from "../specialistyPage/DoctorCard";
export default {
  name: "ListDoctors",
  components: { DoctorCard },
  props: {
    arr: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setClick(doctor) {
      this.$emit("onClick", doctor);
    },
  },
};
</script>

<style scoped></style>
