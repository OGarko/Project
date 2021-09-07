<template>
<div>
  <h1>{{UserEmail}}</h1>
  <div class="profile-link-wrapper">
    <CustomLink title="Пациенты" :active="currentPage===1" @onClick="setPage(1)"/>
    <CustomLink title="Талоны" :active="currentPage===2" @onClick="setPage(2)"/>
  </div>
  <PatientsMain  v-if="currentPage===1" />
  <OrdersMain v-else />
</div>
</template>

<script>
import CustomLink from "../components/customComponents/CustomLink";
import PatientsMain from "../components/profilePage/PatientsMain";
import OrdersMain from "../components/profilePage/OrdersMain";
export default {
  name: "ProfilePage",
  components:{
    OrdersMain,
    PatientsMain,
    CustomLink
  },
  data(){
    return{
      currentPage:1,
    }
  },
  methods:{
    setPage(item){
      this.currentPage=item;
    },
  },
  computed:{
    UserEmail(){
      return localStorage.getItem('user_email')
    },
  },
}
</script>

<style lang="scss">
.profile-link-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 170px;
  margin: 20px 0;
  font-size: 17px;
}

</style>