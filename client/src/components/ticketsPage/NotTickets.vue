<template>
  <div class="not-tickets-wrapper">
    <p>
      В указанную дату талонов к специалисту
      <span>{{ fullNameDoctor }}</span> нет
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NotTickets",
  computed: {
    ...mapGetters(["ACTIVE_DOCTOR"]),
    fullNameDoctor() {
      return `${this.ACTIVE_DOCTOR.sname} ${this.ACTIVE_DOCTOR.fname} ${this.ACTIVE_DOCTOR.mname}`;
    },
  },
};
</script>

<style lang="scss">
.not-tickets-wrapper {
  display: grid;
  grid-gap: 15px;
  margin-top: 50px;
  min-width: 500px;
  border: solid 1px #d9d9d9;
  padding: 25px;
  font-size: 15px;
  span {
    font-weight: bold;
    font-style: italic;
  }
}
</style>
