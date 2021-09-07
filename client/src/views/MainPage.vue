<template>
  <div>
    <Loader v-if="IS_LOADING"/>
    <div v-else>
    <CustomContentHeader title="Заказ Талона" />
    <p>Выбор специальности</p>
    <SpecialityList  :arr="LIST_SPECIALITY"  />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import SpecialityList from "../components/mainPage/SpecialityList";
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import Loader from "../components/customComponents/Loader";
export default {
  name:"MainPage",
  components: {Loader, CustomContentHeader, SpecialityList},
  methods:{
    ...mapActions([
        "READ_LIST_SPECIALITY",

    ]),
  },
  computed:{
    ...mapGetters([
        "LIST_SPECIALITY",
        "IS_LOADING"
    ])
  },
  mounted() {
    this.READ_LIST_SPECIALITY();

  }
}
</script>

<style scoped>


</style>