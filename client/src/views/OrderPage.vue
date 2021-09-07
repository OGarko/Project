<template>
<div>
  <div  v-if="!isSuccessOrder" >
  <CustomContentHeader title="Подтвердите заказ талона" />
  <p>Запись</p>
  </div>
  <CustomContentHeader v-else title="Ваш талон заказан!" />
  <div class="order-info-wrapper" >
    <div class="info-wrapper">
      <p>Учреждение</p>
      <div>
      <p class="info">Поликлинника N2 </p>
        <p class="small-info">г.Гродно, ул.Гагарина, д.18 </p>
      </div>
    </div>
    <div class="info-wrapper">
      <p>Специалист</p>
      <div >
      <p class="info">{{doctor}}</p>
      <p class="small-info">{{fullNameDoctor}}</p>
      </div>
    </div>
    <div class="info-wrapper">
      <p>Кабинет врача</p>
      <p class="info">{{room}}</p>
    </div>
    <div class="info-wrapper">
      <p>Дата и время</p>
      <p class="info">{{formatDateTicket}}</p>
    </div>
    <div class="info-wrapper">
      <p>Пациент</p>
      <div>
      <p class="info">{{fullNamePatient}}</p>
        <div v-if="!isSuccessOrder">
          <CustomLink v-if="!USER" title="Водите в аккаунт" @onClick="toLoginPage"/>
       <CustomLink v-else-if="ACTIVE_PATIENT.id" title="Изменить пациента" @onClick="changeActivePatient"/>
        <CustomLink v-else title="Выберите пациента" @onClick="changeActivePatient"/>
        </div>
      </div>
    </div>
    <div class="buttons-wrapper">
      <CustomButton v-if="!isSuccessOrder" title="Предыдущий шаг" @onClick="toTicketsPage"/>
      <CustomButton v-if="!isSuccessOrder" title="Заказать" @onClick="setOrder"/>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import CustomButton from "../components/customComponents/CustomButton";
import CustomLink from "../components/customComponents/CustomLink";
import moment from 'moment'
import 'moment/locale/ru'
export default {
  name: "OrderPage",
  components:{
    CustomLink,
    CustomButton,
    CustomContentHeader,
  },
  data(){
    return{
      isSuccessOrder:false,
    }
  },
  methods:{
    ...mapMutations([
      'SET_IS_ORDER_PAGE_QUERY'
    ]),
    ...mapActions([
      'ADD_ORDER'
    ]),
    toTicketsPage(){
    this.$router.go(-1);
    },
    toLoginPage(){
      this.SET_IS_ORDER_PAGE_QUERY(true);
      this.$router.push({path:'/login'})
    },
    changeActivePatient(){
      this.SET_IS_ORDER_PAGE_QUERY(true);
      this.$router.push({path:`/profile`});
    },
    setOrder(){
      const order={};
      order['id_user']=localStorage.getItem('current_user');
      order['id_patient']=this.ACTIVE_PATIENT.id;
      order['id_ticket']=this.ACTIVE_TICKET.id_ticket;
      order['date_order']=this.$moment(new Date()).format('YYYY-MM-DD')
      this.ADD_ORDER(order)
      this.isSuccessOrder=true
    }
  },
  computed: {
    ...mapGetters([
      'ACTIVE_DOCTOR',
      'ACTIVE_PATIENT',
      'ACTIVE_TICKET',
      'USER'
    ]),
    doctor() {
      return this.ACTIVE_DOCTOR?.speciality;
    },
    fullNameDoctor() {
      return `${this.ACTIVE_DOCTOR?.sname} ${this.ACTIVE_DOCTOR?.fname} ${this.ACTIVE_DOCTOR?.mname}`;
    },
    room() {
      return this.ACTIVE_DOCTOR?.room;
    },
    formatDateTicket() {
      const date_ticket = moment(this.ACTIVE_TICKET?.date_ticket, 'YYYY-MM-DD').locale('ru').format('DD MMMM YYYY');
      const time_ticket = this.ACTIVE_TICKET?.time.slice(0, -3)
      return `${date_ticket}, ${time_ticket}`
    },
    fullNamePatient() {
      let patient = '';
      if (Object.keys(this.ACTIVE_PATIENT).length) {
        patient = `${this.ACTIVE_PATIENT?.sname} ${this.ACTIVE_PATIENT?.fname}`
      }
      return patient
    },
  }
}
</script>

<style lang="scss">
.order-info-wrapper{
  margin-top: 50px;
  .info-wrapper{
    display: grid;
    grid-template-columns: 150px auto;
    grid-gap: 10px;
    margin-top: 15px;
    height: 70px;
  }
  .buttons-wrapper{
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 35px;
    min-width: 400px;
  }
  .info{
    font-size: 20px;
  }
  .small-info{
    font-size: 14px;
    color: #999999;
    margin-top: 5px;
  }
}
</style>