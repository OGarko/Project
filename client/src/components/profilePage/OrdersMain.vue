<template>
  <div>
    <Loader v-if="IS_LOADING" />
    <div v-else>
      <CustomSelect
        v-model="selected"
        :options="LIST_PATIENTS"
        @change="setSelected"
      />
      <p class="info-message" v-if="isRemoveOrder">
        Запись к специалисту {{ fullNameDoctor }} отменена
      </p>
      <div class="orders-list">
        <div v-for="el in filteredOrders" :key="el.id">
          <OrderCard :obj="el" @onRemove="removeOrder" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../customComponents/CustomSelect";
import Loader from "../customComponents/Loader";
import OrderCard from "./OrderCard";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "OrdersMain",
  components: {
    CustomSelect,
    Loader,
    OrderCard,
  },
  data() {
    return {
      selected: "",
      isRemoveOrder: false,
      order: {},
    };
  },
  methods: {
    ...mapActions(["READ_LIST_ORDERS", "REMOVE_ORDER"]),
    removeOrder(item) {
      this.order = { ...item };
      const payload = {};
      payload["id_order"] = item.id_order;
      payload["id_ticket"] = item.id_ticket;
      this.REMOVE_ORDER(payload);
      this.isRemoveOrder = true;
    },
    setSelected(item) {
      this.selected = item;
    },
  },
  computed: {
    ...mapGetters(["LIST_ORDERS", "IS_LOADING", "LIST_PATIENTS"]),
    filteredOrders() {
      const selected = +this.selected;
      return selected
        ? this.LIST_ORDERS.filter((el) => el.id_patient === selected)
        : this.LIST_ORDERS;
    },
    fullNameDoctor() {
      return `${this.order?.sname_doctor} ${this.order?.fname_doctor} ${this.order?.mname_doctor}`;
    },
  },
  mounted() {
    const id_user = localStorage.getItem("current_user");
    this.READ_LIST_ORDERS(id_user);
  },
};
</script>

<style lang="scss">
.info-message {
  margin: 25px 0 0 0;
}
.orders-list {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  cursor: pointer;
}
</style>
