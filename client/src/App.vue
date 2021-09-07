<template>
  <div class="app-wrapper">
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/content/Content";

export default {
  name: "App",
  components: {
    Content,
    Footer,
    Header,
  },
  methods: {
    ...mapActions(["READ_LIST_DOCTORS"]),
  },
  mounted() {
    this.READ_LIST_DOCTORS();
  },
};
</script>
<style>
.app-wrapper {
  display: grid;
}
</style>
