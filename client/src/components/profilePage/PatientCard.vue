<template>
  <div class="patients-card-wrapper">
    <div class="patient-item-wrapper">
      <p class="fio-patient">{{ fullName }}</p>
      <div class="info-adress">
        <p>{{ obj.locality }}</p>
        <p>{{ obj.adress }}</p>
      </div>
      <p class="info-birth-date">{{ formatDate }}</p>
    </div>
    <div class="rightPart">
      <CustomBtn
        :class="{ activeBtn: activeStatus }"
        iconBtn="check"
        @onClick="check"
      />
      <CustomBtn iconBtn="edit" @onClick="edit" />
      <CustomBtn iconBtn="delete" @onClick="remove" />
    </div>
  </div>
</template>

<script>
import CustomBtn from "../customComponents/CustomBtn";
import moment from "moment";
import "moment/locale/ru";
export default {
  name: "PatientsCard",
  components: { CustomBtn },
  props: {
    obj: {
      type: Object,
      required: true,
    },
    activePatient: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    remove() {
      this.$emit("onRemove", this.obj.id);
    },
    edit() {
      this.$emit("onEdit", this.obj);
    },
    check() {
      this.$emit("onChecked", this.obj);
    },
  },
  computed: {
    formatDate() {
      let tmp = this.obj.dateOfBirth;
      return moment(tmp, "YYYY-MM-DD")
        .locale("ru")
        .format("DD MMMM YYYY");
    },
    fullName() {
      return `${this.obj.sname} ${this.obj.fname} ${this.obj.mname}`;
    },
    activeStatus() {
      return this.obj.id === this.activePatient?.id;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/styles";
.patients-card-wrapper {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  max-width: 330px;
  .fio-patient {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 13px;
  }
  .info-adress {
    margin-bottom: 14px;
    font-size: 15px;
  }
  .info-birth-date {
    font-size: 14px;
    color: #999999;
  }
}
.patient-item-wrapper {
  padding: 15px;
  box-sizing: border-box;
  background: $card_color;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.rightPart {
  padding: 15px;
  background: $card_color;
  margin-left: auto;
  display: grid;
}
.activeBtn {
  color: $main_color;
}
</style>
