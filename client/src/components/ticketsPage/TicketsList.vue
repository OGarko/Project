<template>
  <div>
    <div v-if="!tickets.length">
      <NotTickets />
    </div>
    <div v-else class="tickets-card-wrapper">
      <div v-for="el in tickets" :key="el.id_ticket">
        <TimeCard :obj="el" @onClick="setClick" />
      </div>
    </div>
  </div>
</template>

<script>
import TimeCard from "./TimeCard";
import NotTickets from "./NotTickets";
export default {
  name: "TicketsList",
  components: {
    TimeCard,
    NotTickets,
  },
  props: {
    tickets: {
      type: Array,
    },
  },
  methods: {
    setClick(ticket) {
      this.$emit("onClick", ticket);
    },
  },
};
</script>

<style lang="scss">
.tickets-card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
