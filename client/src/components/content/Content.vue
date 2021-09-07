<template>
  <div class="content-wrapper">
    <Navbar />
    <div class="content">
  <router-view />
      </div>
  </div>
</template>

<script>
import Navbar from "../Navbar";
export default {
  name: "Content",
  components:{
    Navbar,
  },
}
</script>

<style lang="scss">
.content-wrapper{
  padding-top: 4em;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr;
  box-shadow: 5px 14px 28px rgba(0,0,0,0.1) inset, 0 0 0 0;
  .content{
    min-height:600px;
    min-width: 350px;
  }
}
</style>