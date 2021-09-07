<template>
  <div class="navbar-wrapper">
    <div class="menu-wrapper">
      <CustomLink
        title="Заказ талона"
        :active="this.$route.path === 'main'"
        @onClick="toMainPage"
      />
      <CustomLink
        title="Информация"
        :active="this.$route.path === '/information'"
        @onClick="toInformationPage"
      />
      <CustomLink
        title="Врачи"
        :active="this.$route.path === '/doctors'"
        @onClick="toDoctorsPage"
      />
    </div>
    <div class="person-card-button">
      <CustomButton
        v-if="USER"
        :active="this.$route.path === '/profile'"
        title="Личная карточка"
        @onClick="toProfilePage"
      />
    </div>
  </div>
</template>
<script>
import CustomLink from "./customComponents/CustomLink";
import CustomButton from "./customComponents/CustomButton";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  components: { CustomButton, CustomLink },

  methods: {
    toMainPage() {
      this.currentPage = "main";
      this.$router.push({ path: `/` });
    },
    toInformationPage() {
      this.currentPage = "information";
      this.$router.push({ path: `/information` });
    },
    toDoctorsPage() {
      this.currentPage = "doctors";
      this.$router.push({ path: `/doctors` });
    },
    toProfilePage() {
      this.currentPage = "profile";
      this.$router.push({ path: `/profile` });
    },
  },
  computed: {
    ...mapGetters(["USER"]),
  },
};
</script>
<style lang="scss">
.navbar-wrapper {
  max-height: 500px;
  padding: 50px 0 0 80px;
  .menu-wrapper {
    display: grid;
    grid-gap: 45px;
    font-size: 18px;
  }
  .person-card-button {
    margin-top: 50px;
  }
}
</style>
