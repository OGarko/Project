<template>
<div>
<div class="login-form-wrapper">
  <CustomContentHeader title="Вход в систему" />
  <p>Аунтетификация</p>
  <Loader v-if="IS_LOADING"/>
  <div v-else>
  <p class="error-wrapper"> {{ERROR}}</p>
  <div class="auth-wrapper">
  <div v-for="row in rows" :key="row.index">
    <CustomInput :el="row" @onInput="setItem"/>
  </div>
  </div>
  <CustomButton title="Bход" @onClick="setAuthStatus"/>
  </div>
</div>
</div>
</template>

<script>
import CustomInput from "../components/customComponents/CustomInput";
import CustomButton from "../components/customComponents/CustomButton";
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import Loader from "../components/customComponents/Loader";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: "LoginPage",
  components: {CustomInput, CustomButton, CustomContentHeader, Loader},
  data(){
    return {
      user:{
        email:'',
        password:'',
      },
      rows:[
        {index:0, name: 'email', label:'E-mail', type:'text', item:'', flag: true, err:false},
        {index:1, name: 'password', label: 'Пароль', type:'password', item:'', flag:true, err: false}
      ]
    }
  },
  methods:{
    ...mapActions([
      "SET_IS_AUTH"
    ]),
    ...mapMutations([
      'SET_IS_ORDER_PAGE_QUERY'
    ]),
    setItem(value, index, prop){
      this.rows[index].item=value
      this.user[prop]=value
    },
  async setAuthStatus(){
      const isValid=this.validation();
      if(!isValid){
        !this.rows[0].item ? this.rows[0]['err']=true : this.rows[0]['err']=false
        !this.rows[1].item ?  this.rows[1]['err']=true : this.rows[1]['err']=false
      }else{
        await this.SET_IS_AUTH(this.user);
        if(!this.ERROR){
          this.setRoute()
        }
      }

    },
    validation(){
      if(this.user.email && this.user.password) {
        return true
      }else{
        return false
      }
    },
    setRoute(){
      console.log('!!!',this.IS_ORDER_PAGE_QUERY)
      if (this.IS_ORDER_PAGE_QUERY) {
        this.SET_IS_ORDER_PAGE_QUERY(false);
        this.$router.go(-1);
      }else{ this.$router.push({path:`/`})}

    }
  },
  computed:{
   ...mapGetters([
       'ERROR',
       'IS_LOADING',
       'IS_ORDER_PAGE_QUERY',
   ])
  }
}
</script>

<style lang="scss">
.auth-wrapper {
  margin-top: 40px;
  display: grid;
  grid-gap: 30px;
  max-width: 400px;
  position: relative;
}
.flag {
  color: #ff6f26;
}
.error-wrapper{
  margin-top: 25px;
  font-size: 16px;
  color: #d0422a;
}
</style>