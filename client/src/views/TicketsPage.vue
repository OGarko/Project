<template>
<div class="ticket-page-wrapper">
  <CustomContentHeader title="Заказ Талона" />
  <p>Выбор даты и времени</p>
  <div class="info-date-wrapper">
  <p>Выбeрите дату</p>
    <DatePicker class="date-ticket"
                v-model="date"
                :formatter="momentFormat"
                @input="setDate"/>
  </div>
  <div v-if="date">
  <Loader v-if="IS_LOADING"/>
  <div v-else>
    <TicketsList :tickets="LIST_TICKETS" @onClick="setActiveTicket"/>
  <div class="button-wrapper" v-if="!IS_LOADING ">
    <CustomButton  title="Предыдущий шаг"  @onClcik="toSpecialistyPage"/>
  </div>
  </div>
  </div>
</div>
</template>
<script>

//
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import {mapGetters,mapMutations, mapActions} from 'vuex'
import Loader from "../components/customComponents/Loader";
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import TicketsList from "../components/ticketsPage/TicketsList";
import CustomButton from "../components/customComponents/CustomButton";

export default {
  name: "TicketsPage",
  components: {TicketsList, CustomContentHeader, DatePicker, Loader,CustomButton},
  data(){
    return{
      date:null,
       momentFormat:{
      stringify:()=>{
        return this.date ? this.$moment(this.date, 'YYYY-MM-DD').format('DD.MM.YYYY'):'';
      },
    },
    }
  },
  methods:{
    ...mapActions([
        'READ_LIST_TICKETS'
    ]),
    ...mapMutations([
       'SET_ACTIVE_TICKET'
    ]),
    setActiveTicket(item){
      this.SET_ACTIVE_TICKET(item);
      this.$router.push({path: `/order`});
    },
    toSpecialistyPage() {
      this.$router.go(-3)
    },
    async setDate(){
      const formatDate=this.$moment(this.date).format('YYYY-MM-DD')

      const id_doctor=this.$route.query.doctor;
      //await this.READ_LIST_TICKETS({id:id_doctor,date:formatDate} );
      await this.READ_LIST_TICKETS({id:id_doctor,date:formatDate} );
    }
  },
  computed:{
    ...mapGetters([
        'LIST_TICKETS',
        'IS_LOADING',
    ])
  },
}
</script>

<style lang="scss">
.info-date-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  max-width: 370px;
}
.button_wrapper {
  margin-top: 30px;
}
</style>