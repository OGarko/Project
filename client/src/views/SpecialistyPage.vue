<template>
  <div class="speciality-list-page-wrapper">
    <CustomContentHeader title="Заказ Талона" />
    <div class="sub-header">
    <p>Выбор врача</p>
    </div>
    <div class="speciality-list-wrapper" >
      <div class="doctors-card-wrapper" v-for="doctor in arrDoctorsSpec" :key="doctor.id" >
        <DoctorCard :obj='doctor' @onClick="toTicketsPage"/>
      </div>
    </div>
    <div class="button-wrapper">
    <CustomButton title="Предыдущий шаг" @onClick="toMainPage" />
     </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
import DoctorCard from "../components/specialistyPage/DoctorCard";
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import CustomButton from "../components/customComponents/CustomButton";
export default {
  name: "SpecialistyPage",
  components: {CustomButton, DoctorCard,CustomContentHeader},
  data(){
    return {
      arrDoctorsSpec:[],
      isAllDoctors:false,
      value:null,
    }
  },
  methods:{
   /* ...mapActions([
      'READ_LIST_ACTIVE_DOCTORS',
    ]),*/
    ...mapMutations([
        'SET_ACTIVE_DOCTOR'
    ]),

    toTicketsPage(doctor) {
      this.SET_ACTIVE_DOCTOR(doctor)
      const id_doctor=doctor.id
      this.$router.push({name: 'tickets', query: {'doctor': id_doctor}})
    },
    toMainPage() {
      this.$router.go(-1)
    }
   /* getDoctorsSpec(item){
      const arrNew=this.LIST_DOCTORS.filter(el=>el.id_spec===+item);
      return arrNew
    },*/
   /* setFlag(item){
      this.sortFlag=item
    },*/
  },
  computed: {
    ...mapGetters([
      'LIST_DOCTORS',
    ]),
   /* changedArrDoctors(item){
          return item===1?this.arrDoctorsSpec:this.LIST_ACTIVE_DOCTORS
    }*/
  },
  mounted(){
    const id_spec=this.$route.query.spec;
   // this.READ_LIST_ACTIVE_DOCTORS(id_spec);
    this.arrDoctorsSpec=this.LIST_DOCTORS.filter(el=>el.id_spec===+id_spec)
  }
}
</script>

<style lang="scss">
.speciality-list-page-wrapper{
  width: 100%;
.speciality-list-wrapper {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 30px;
  cusrsor: pointer;

  .doctors-card-wrapper {
    //min-width: 275px;
    //width: 275px;
    //min-height: 100px;
    min-width: 275px;
    width: 275px;
    height: 100%;
    box-sizing: border-box;
    margin: 0 25px 25px 0;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 20px;
    background: #fff;
    //display: inline-block;
    position: relative;
    text-align: center;
    cursor: pointer;

    &:hover {
      box-shadow: 4px 8px 25px #FF6F26 inset,  0 14px 28px rgba(0,0,0,0.25);
    }

    span {
      padding-left: 20px;
      font-size: 19px;
      font-weight: normal;
    }
  }

  .sub-header {
    margin-top: 10px;
  }
}
}
.button_wrapper {
  margin-top: 30px;
}
</style>