<template>
  <div>
    <Loader v-if="IS_LOADING" />
  <div v-else class="main-page-wrapper">
    <CustomContentHeader title="Структура поликлинники" />
    <CustomList :items="LIST_DEPARTMENT"/>
    <Telephones />
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CustomList from "../components/informationPage/CustomList";
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import Telephones from "../components/informationPage/Telephones";
import Loader from "../components/customComponents/Loader";
export default {
  name:'InformationPage',
  components: {
    CustomList,
    CustomContentHeader,
    Telephones,
    Loader
  },
  methods:{
    ...mapActions([
        "READ_LIST_DEPARTMENT"
    ])
  },
  computed:{
    ...mapGetters([
        "LIST_DEPARTMENT",
        "IS_LOADING"
    ])
  },
  mounted() {
    this.READ_LIST_DEPARTMENT()
  },

}
</script>

<style lang="scss" scoped>
.main-page-wrapper{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
}

</style>