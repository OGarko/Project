<template>
<div class="doctors-page-wrapper">
  <CustomContentHeader title="Врачи" />
  <div class="info-search-wrapper">
    <input class="info-search" @keydown="debounceSearch" type="text" v-model="searchData" placeholder="Введите фамилию врача" />
  <CustomBtn iconBtn="search" />
  </div>
  <ListDoctors :arr="arrDoctors"  @onClick="toTicketsPage" />
</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
import debounce from 'debounce'
import CustomContentHeader from "../components/customComponents/CustomContentHeader";
import ListDoctors from "../components/doctorsPage/ListDoctors";
import CustomBtn from "../components/customComponents/CustomBtn";
export default {
  name: "DoctorsPage",
  components: {CustomBtn, ListDoctors, CustomContentHeader},
  data(){
    return {
      searchData:'',
      arrDoctors:[],
    }
  },
  methods:{
    ...mapMutations([
      'SET_ACTIVE_DOCTOR'
    ]),
    debounceSearch: debounce(function () {
      this.getSearchData();
    }, 500),

    getSearchData() {
      const searchData=this.searchData.toLowerCase()
      this.arrDoctors= searchData.length ? this.LIST_DOCTORS.filter(el=>el.sname.toLowerCase().indexOf(searchData) > -1): this.LIST_DOCTORS
    },
    toTicketsPage(doctor) {
      this.SET_ACTIVE_DOCTOR(doctor)
      const id_doctor=doctor.id
      this.$router.push({name: 'tickets', query: {'doctor': id_doctor}})
    },
  },
  computed:{
    ...mapGetters([
        'LIST_DOCTORS'
    ]),
  },
  mounted() {
    this.arrDoctors=[...this.LIST_DOCTORS]
  }
}
</script>

<style lang="scss">
.doctors-page-wrapper{
    .fio-doctor {
      cursor: pointer;
      color: #ff6f26;
      border-bottom: 1px dashed #ff6f26;
      padding-bottom: 1px;
      &:hover {
        color: #000000;
        border-bottom: 1px dashed #000000;
      }
    }
  }
.info-search-wrapper {
  display: flex;
  margin-top: 35px;
  .info-search {
    width: 100%;
    border: solid 1px #d9d9d9;
    border-radius: 2px;
    background: none;
    padding: 10px 15px;
    max-width: 250px;
    outline: none;
  }
}

</style>