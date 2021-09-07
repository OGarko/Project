<template>
  <div>
    <div class="doctor-card-wrapper" @click="setClick">
      <span class="fio-doctor">{{ fullname }}</span>
      <p class="spec-doctor">{{ obj.speciality }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoctorCard",
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
    fullname() {
      return `${this.obj.sname} ${this.obj.fname} ${this.obj.mname}`;
    },
  },
};
</script>

<style lang="scss">
.doctor-card-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  .spec-doctor {
    color: #999999;
    font-size: 16px;
    margin-top: 3px;
  }
}
</style>
