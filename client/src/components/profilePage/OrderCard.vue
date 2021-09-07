<template>
  <div class="ticket-card-wrapper">
    <p class="date_ticket">{{ formatDate }}, {{ formatTime }}</p>
    <div class="info-spec">
      <p class="spec">{{ obj.speciality }}</p>
      <p class="info-doctor">{{ fullNameDoctor }}</p>
    </div>
    <div class="info-clinic">
      <p>Поликлинника N2</p>
      <p></p>
      <p class="adress-clinic">г.Гродно ул.Гагарина, д.18</p>
      <p></p>
    </div>
    <p class="patient">{{ fullNamePatient }}</p>
    <p class="date-order">Заказан {{ formatDateOrder }}</p>
    <div class="btn-wrapper">
      <CustomBtn icon-btn="delete" @onClick="remove" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/ru";
import CustomBtn from "../customComponents/CustomBtn";
export default {
  name: "OrderCard",
  components: { CustomBtn },
  props: {
    obj: {
      type: Object,
      required: true,
    },
  },
  methods: {
    remove() {
      this.$emit("onRemove", this.obj);
    },
  },
  computed: {
    formatDate() {
      let tmp = this.obj.date_ticket;
      return tmp
        ? moment(tmp, "YYYY-MM-DD")
            .locale("ru")
            .format("DD MMMM YYYY")
        : "";
    },
    formatDateOrder() {
      let tmp = this.obj.date_order;
      return tmp
        ? moment(tmp, "YYYY-MM-DD")
            .locale("ru")
            .format("DD MMMM YYYY")
        : "";
    },
    formatTime() {
      return this.obj.time ? this.obj.time.slice(0, -3) : "";
    },
    fullNameDoctor() {
      return `${this.obj?.sname_doctor} ${this.obj?.fname_doctor} ${this.obj?.mname_doctor}`;
    },
    fullNamePatient() {
      return `${this.obj?.sname_patient} ${this.obj?.fname_patient}`;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles";

.ticket-card-wrapper {
  padding: 15px;
  background: $card_color;
  box-sizing: border-box;
  width: 275px;
  min-height: 200px;
  .date_ticket {
    font-weight: bold;
  }
  .info-spec,
  .info-clinic {
    margin: 23px 0 23px;
  }
  .adress-clinic,
  .date-order,
  .info-doctor {
    font-size: 14px;
    color: #999999;
  }
  .btn-wrapper {
    width: 25px;
    height: 25px;
    margin-left: auto;
  }
}
</style>
