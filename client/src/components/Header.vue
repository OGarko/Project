<template>
  <div class="header-wrapper">
    <div class="wrapper">
      <img src="@/assets/img/logo.png" />
      <div class="auth-block">
        <CustomLink
          v-if="!USER"
          title="Зарегистрироваться"
          :active="this.$route.path === '/registration'"
          @onClick="setRouter('registration')"
        />
        <CustomLink v-if="USER" title="Выйти" @onClick="logout" />
        <CustomLink
          v-else
          title="Войти"
          :active="this.$route.path === '/login'"
          @onClick="setRouter('login')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import CustomLink from "./customComponents/CustomLink";
export default {
  name: "Header",
  components: { CustomLink },
  methods: {
    ...mapMutations(["SET_USER"]),
    setRouter(item) {
      this.$router.push({ path: `/${item}` });
    },
    logout() {
      localStorage.removeItem("current_user");
      localStorage.removeItem("user_email");
      this.SET_USER(null);
      this.$router.push({ path: `/` });
    },
  },
  computed: {
    ...mapGetters(["USER"]),
  },
  mounted() {
    if (localStorage.current_user) {
      this.SET_USER(localStorage.current_user);
    }
  },
};
</script>
<style lang="scss">
@import "../assets/styles";
.header-wrapper {
  background: $card_color;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 1175px;
    display: flex;
  }
  .auth-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    min-width: 225px;
  }
}
</style>
