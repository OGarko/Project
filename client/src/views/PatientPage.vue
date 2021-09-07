<template>
  <div class="patient-page-wrapper">
  <CustomContentHeader v-if='IS_EDIT_PATIENT_PAGE' title="Редактирование профиля" />
  <CustomContentHeader v-else title="Добавление профиля пациента"/>
    <div class="patient-wrapper">
  <InputPatient label="Фамилия" :item="this.patient.sname" :flag="true" v-model="patient.sname" />
    <InputPatient label="Имя" :item="this.patient.fname" :flag="true" v-model="patient.fname" />
    <InputPatient label="Отчество" :item="this.patient.mname" v-model="patient.mname" />
    <div class="info-date-birth">
      <div class="label-date-of-birth">
      <label>Дата рождения</label><span class="flag"> *</span>
      </div>
      <DatePicker class="date-birth"
                  v-model="patient.dateOfBirth"
                  valueType="format"
                  :value="dateOfBirth"/>
    </div>
    <InputPatient label="Населенный пункт" :item="this.patient.locality" v-model="patient.locality" />
    <InputPatient label="Адрес" :item="this.patient.adress" v-model="patient.adress" />
    </div>
    <div class="buttons-wrapper">
      <CustomButton title="Сохранить"  @onClick="save" />
      <CustomButton title="Отменить" @onClick="toProfilePage"/>
    </div>
  </div>
</template>

<script>
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import InputPatient from "../components/patientsPage/InputPatient";
import CustomButton from "../components/customComponents/CustomButton";
import DatePicker from "vue2-datepicker";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: "PatientPage",
  components:{CustomContentHeader, InputPatient, CustomButton, DatePicker},
  data() {
    return {
      patient: {
        id: '',
        sname: '',
        fname: '',
        mname: '',
        dateOfBirth: '',
        locality: '',
        adress: '',
      },
    }
  },
  methods: {
    ...mapActions([
      'ADD_PATIENT',
      'EDIT_PATIENT',
    ]),
    ...mapMutations([
      'SET_IS_EDIT_PATIENT_PAGE',
      'SET_IS_LOADING'
    ]),
    toProfilePage() {
      this.$router.push({path:'/profile'})
    },
   async save() {
     this.IS_EDIT_PATIENT_PAGE ?  await this.EDIT_PATIENT(this.patient) : await this.ADD_PATIENT(this.patient);
     this.SET_IS_EDIT_PATIENT_PAGE(false);
      this.patient={};
        if (!this.ERROR) {
          this.toProfilePage()
      }
    }
  },
  computed:{
    ...mapGetters([
      'ERROR',
      'ACTIVE_PATIENT',
      'IS_EDIT_PATIENT_PAGE',
      'IS_LOADING'
    ]),
    dateOfBirth(){
      return this.$moment(this.patient.dateOfBirth, 'YYYY-MM-DD').format('DD.MM.YYYY')
    },
  },
  mounted() {
    if(this.IS_EDIT_PATIENT_PAGE) {
      this.patient={...this.ACTIVE_PATIENT}
    }
  }
}
</script>

<style lang="scss">
.patient-page-wrapper{
  display: grid;
  grid-gap: 15px;
  max-width: 450px;
  .patient-wrapper {
    margin-top: 25px;
    display: grid;
    grid-gap: 45px;
  }
.buttons-wrapper{
  display: flex;
  justify-content: space-between;
}
  .info-date-birth{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .label-date-of-birth{
      width: 35%;
    }
    .date-birth{
      width: 65%;
    }
  }
}

</style>