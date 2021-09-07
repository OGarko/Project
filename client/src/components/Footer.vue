<template>
  <div class="footer-wrapper">
    <div class="wrapper">
      <div class="adress-clinic">
        <span>г.Гродно, ул. Гагарина, д. 18</span>
      </div>
      <div class="clinic-info">
        <div class="phone-registry">
          <strong>Регистратура</strong>
          <p>+375 152 67-74-25</p>
          <p>+375 152 566-07-23</p>
          <p>+375 33 310-22-41</p>
        </div>
        <div class="openingHours">
          <p><b>ПН-ПТ:</b> 07:00-20:00</p>
          <p><b>СБ:</b> 09:00-15:00</p>
        </div>
        <div class="infoBlock">
          <p>2det.by</p>
          <p>dqp-2@mail.grodno.by</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
@import "../assets/styles";
.footer-wrapper {
  margin-top: 25px;
  background: $card_color;
  display: flex;
  padding: 25px;
  justify-content: center;
  .wrapper {
    width: 1300px;
    display: flex;
    justify-content: space-between;
  }
  .clinic-info {
    display: flex;
    justify-content: space-between;
    min-width: 415px;
  }
  p {
    font-size: 13px;
  }
}
</style>
