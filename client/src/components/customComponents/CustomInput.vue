<template>
  <div class="custom-input-wrapper">
    <div class="input-wrapper">
      <label class="label-wrapper">
        {{ el.label }}<span class="flag" v-if="el.flag"> *</span>
      </label>
      <div class="input-info">
        <input
          class="input"
          :class="{ input_errInput: el.err }"
          :type="el.type"
          :value="el.item"
          @input="onInput"
        />
        <p class="err-info" v-if="el.err">Поле обязательно для заполнения</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    el: {
      type: Object,
    },
  },
  methods: {
    onInput(e) {
      this.$emit("onInput", e.target.value.trim(), this.el.index, this.el.name);
    },
  },
};
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .label-wrapper {
    width: 40%;
  }
  .input-info {
    width: 60%;
  }
  .input {
    width: 100%;
    border: solid 1px #d9d9d9;
    border-radius: 2px;
    background: none;
    padding: 10px;
    outline: none;
  }
  .input_errInput {
    border: solid 1px #d0422a;
    padding: 10px;
  }
}
.err-info {
  margin-top: 5px;
  font-size: 13px;
  color: #d0422a;
}
</style>
