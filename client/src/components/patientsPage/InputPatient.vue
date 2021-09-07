<template>
  <div class="input-wrapper">
    <div class="label-wrapper">
      <label> {{ label }}<span class="flag" v-if="flag"> *</span> </label>
    </div>
    <div class="input-info">
      <input class="input" type="text" :value="item" @input="onInput" />
    </div>
  </div>
</template>
<script>
export default {
  name: "InputPatient",
  props: {
    item: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    flag: {
      type: Boolean,
      default: false,
    },
    err: {
      type: Object,
    },
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value.trim());
    },
  },
};
</script>
<style lang="scss">
.input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .label-wrapper {
    width: 35%;
  }

  .input-info {
    width: 65%;
  }
  .input {
    border: solid 1px #d9d9d9;
    border-radius: 2px;
    background: none;
    padding: 10px;
    outline: none;
    font-size: 15px;
  }
}
</style>
