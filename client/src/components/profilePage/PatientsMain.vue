<template>
  <div>
    <Loader v-if="IS_LOADING" />
    <div v-else class="patient-list-wrapper">
      <div class="patients-list" v-for="el in LIST_PATIENTS" :key="el.id">
        <PatientCard
          :obj="el"
          :active-patient="ACTIVE_PATIENT"
          @onRemove="removePatient"
          @onEdit="editPatient"
          @onChecked="setActivePatient"
        />
      </div>
      <CustomButton title="Добавить пациента" @onClick="toPatientPage" />
    </div>
  </div>
</template>

<script>
import Loader from "../customComponents/Loader";
import PatientCard from "./PatientCard";
import CustomButton from "../customComponents/CustomButton";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "PatientsMain",
  components: {
    Loader,
    PatientCard,
    CustomButton,
  },
  methods: {
    ...mapActions(["READ_LIST_PATIENTS", "REMOVE_PATIENT"]),
    ...mapMutations([
      "SET_ACTIVE_PATIENT",
      "SET_IS_EDIT_PATIENT_PAGE",
      "SET_IS_ORDER_PAGE_QUERY",
    ]),
    removePatient(item) {
      this.REMOVE_PATIENT(item);
    },
    toPatientPage() {
      this.$router.push({ path: `/patient` });
    },
    editPatient(item) {
      this.SET_IS_EDIT_PATIENT_PAGE(true);
      this.SET_ACTIVE_PATIENT(item);
      this.$router.push({ path: `/patient` });
    },
    setActivePatient(item) {
      this.SET_ACTIVE_PATIENT(item);
      if (this.IS_ORDER_PAGE_QUERY) {
        this.SET_IS_ORDER_PAGE_QUERY(false);
        this.$router.go(-1);
      }
    },
  },
  computed: {
    ...mapGetters([
      "LIST_PATIENTS",
      "ACTIVE_PATIENT",
      "IS_ORDER_PAGE_QUERY",
      "IS_LOADING",
    ]),
  },
  mounted() {
    const id_user = localStorage.getItem("current_user");
    this.READ_LIST_PATIENTS(id_user);
    console.log();
  },
};
</script>

<style lang="scss">
.patien-list-wrapper {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  cursor: pointer;
}
</style>
