<template>
  <div class="telephones-wrapper">
    <div class="info-tel">
      <p>Справка:</p>
      <div class="tel">
        <p>+375 152 67-74-25</p>
        <p>+375 44 566-07-23</p>
        <p>+375 33 310-22-41</p>
      </div>
    </div>
    <div class="record-tel">
      <p>Предварительная запись:</p>
      <div class="tel">
        <p>+375 152 67-74-02</p>
        <p>+375 152 67-74-03</p>
      </div>
    </div>
    <div class="call-doctors-tel">
      <p>Вызов врача на дом:</p>
      <div class="tel">
        <p>+375 152 67-74-18</p>
        <p>+375 152 67-74-23</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Telephones",
};
</script>

<style lang="scss">
@import "src/assets/styles";
.info-tel,
.record-tel,
.call-doctors-tel {
  display: flex;
  justify-content: space-between;
}
.info-tel,
.record-tel {
  border-bottom: 0.1em solid $main_color;
}
.record-tel,
.call-doctors-tel {
  margin: 15px 0 15px 0;
}
</style>
