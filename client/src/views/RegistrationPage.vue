<template>
    <div class="registration-form-wrapper">
      <CustomContentHeader title="Регистрация" />
      <p>Создать аккаунт</p>
      <Loader v-if="IS_LOADING"/>
      <div v-else>
      <p class="message-wrapper"> {{ERROR}}</p>
      <p v-if="isSuccess" class="message-wrapper">Рeгистрация прошла успешно</p>
      <p v-if="this.err" class="message-wrapper">Введенный пароль и его подтверждение не совпадают</p>
      <div class="registration-wrapper">
        <div v-for="row in rows" :key="row.index">
          <CustomInput :el="row" @onInput="setItem"/>
        </div>
      </div>
      </div>
      <CustomButton v-if="!isSuccess" title="Зарегистрировать" @onClick="registration"/>
    </div>
</template>

<script>
import Loader from "../components/customComponents/Loader";
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import CustomInput from "../components/customComponents/CustomInput";
import CustomButton from "../components/customComponents/CustomButton";
import {mapGetters, mapActions} from "vuex";
export default {
  name: "RegistrationPage",
  components:{
    CustomContentHeader,
    CustomInput,
    CustomButton,
    Loader
  },
  data(){
    return {
      user:{
        email:'',
        password:'',
        rePassword:'',
      },
      err:0,
      isSuccess:false,
      rows:[
        {index:0, name: 'email', label:'E-mail', type:'text', item:'', flag: true, err: false},
        {index:1, name: 'password', label: 'Пароль',item:'', type:'password', flag:true, err: false},
        {index:2, name: 'rePassword', label: 'Повторите пароль', type:'password', item:'', flag:true, err: false}
      ]
    }
  },
  methods: {
    ...mapActions([
      'CREATE_ACCOUNT'
    ]),
    setItem(value, index, prop) {
      this.rows[index].item = value
      this.user[prop] = value
    },
    async registration() {
      const isValid = this.validation();
      console.log(isValid)
      this.err = 0;
      if (isValid) {
        switch (isValid) {
          case 1:
            !this.rows[0].item ? this.rows[0]['err'] = true : this.rows[0]['err'] = false;
            !this.rows[1].item ? this.rows[1]['err'] = true : this.rows[1]['err'] = false;
            !this.rows[2].item ? this.rows[2]['err'] = true : this.rows[2]['err'] = false;
            break;
          case 2:
            this.err += 1;
            break;
        }
      }
      if (!isValid) {
        this.rows[0]['err'] = false;
        this.rows[1]['err'] = false;
        this.rows[2]['err'] = false;
        await this.CREATE_ACCOUNT({email: this.user.email, password: this.user.password});
        if (!this.ERROR) {
          this.isSuccess = true;
        }
      }
    },
    validation() {
      let err = 0;
      if (!this.user.email || !this.user.password || !this.user.rePassword) {
        err = 1;
      } else if (this.user.password !== this.user.rePassword) {
        err = 2;
      }
      return err;
    },
  },
    computed: {
      ...mapGetters([
        'ERROR',
        'IS_LOADING'
      ])
    }
  }
</script>

<style lang="scss">
.registration-form-wrapper {
  display: grid;
  grid-gap: 15px;
  max-width: 400px;
  .registration-wrapper{
    display: grid;
    grid-gap: 30px;
  }
  .message-wrapper{
    font-size: 16px;
    color: #d0422a;
    margin-bottom: 25px;
  }
}

</style>