import Vue from "vue";
import Vuex from "vuex";
import ordersService from "../services/ordersService";
import clinicService from "../services/clinicService";
import authService from "../services/authService";
import patientService from "../services/patientService";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    ListDepartment: [],
    ListActiveDoctors: [],
    ListDoctors: [],
    ListTickets: [],
    ListOrders: [],
    ListSpeciality: [],
    ListPatients: [],
    activePatient: {},
    activeDoctor: {},
    activeTicket: {},
    user: null,
    user_email: "",
    Step: 0,
    Error: null,
    isLoading: false,
    isEditPatientPage: false,
    isOrderPageQuery: false,
  },
  getters: {
    LIST_DEPARTMENT: (state) => state.ListDepartment,
    LIST_ACTIVE_DOCTORS: (state) => state.ListActiveDoctors,
    LIST_DOCTORS: (state) => state.ListDoctors,
    LIST_PATIENTS: (state) => state.ListPatients,
    LIST_TICKETS: (state) => state.ListTickets,
    LIST_ORDERS: (state) => state.ListOrders,
    LIST_SPECIALITY: (state) => state.ListSpeciality,
    ACTIVE_PATIENT: (state) => state.activePatient,
    ACTIVE_DOCTOR: (state) => state.activeDoctor,
    ACTIVE_TICKET: (state) => state.activeTicket,
    USER: (state) => state.user,
    IS_LOADING: (state) => state.isLoading,
    IS_ORDER_PAGE_QUERY: (state) => state.isOrderPageQuery,
    ERROR: (state) => state.Error,
    IS_EDIT_PATIENT_PAGE: (state) => state.isEditPatientPage,
    USER_EMAIL: (state) => state.user_email,
  },
  mutations: {
    SET_LIST_DEPARTMENT: (state, data) => (state.ListDepartment = data),
    SET_LIST_ACTIVE_DOCTORS: (state, data) => (state.ListActiveDoctors = data),
    SET_LIST_DOCTORS: (state, data) => (state.ListDoctors = data),
    SET_LIST_TICKETS: (state, data) => (state.ListTickets = data),
    SET_LIST_ORDERS: (state, data) => (state.ListOrders = data),
    SET_ERROR: (state, data) => (state.Error = data),
    SET_LIST_SPECIALITY: (state, data) => (state.ListSpeciality = data),
    SET_USER: (state, data) => (state.user = data),
    SET_USER_EMAIL: (state, data) => (state.user = data),
    SET_LIST_PATIENTS: (state, data) => (state.ListPatients = data),
    SET_IS_LOADING: (state, data) => (state.isLoading = data),
    SET_ACTIVE_PATIENT: (state, data) => (state.activePatient = data),
    SET_ACTIVE_DOCTOR: (state, data) => (state.activeDoctor = data),
    SET_ACTIVE_TICKET: (state, data) => (state.activeTicket = data),
    SET_IS_EDIT_PATIENT_PAGE: (state, data) => (state.isEditPatientPage = data),
    SET_IS_ORDER_PAGE_QUERY: (state, data) => (state.isOrderPageQuery = data),
  },
  actions: {
    async READ_LIST_DEPARTMENT({ commit }) {
      commit("SET_IS_LOADING", true);
      try {
        const ListDepartment = await clinicService.getDepartments();
        commit("SET_LIST_DEPARTMENT", ListDepartment);
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async READ_LIST_ACTIVE_DOCTORS({ commit }, payload) {
      try {
        const ListActiveDoctors = await clinicService.getActiveDoctors(payload);
        commit("SET_LIST_ACTIVE_DOCTORS", ListActiveDoctors);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
    async READ_LIST_DOCTORS({ commit }) {
      try {
        const ListDoctors = await clinicService.getDoctors();
        commit("SET_LIST_DOCTORS", ListDoctors);
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
    async READ_LIST_TICKETS({ commit }, payload) {
      commit("SET_IS_LOADING", true);
      try {
        const ListTickets = await clinicService.getTickets(payload);
        commit("SET_LIST_TICKETS", ListTickets);
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async READ_LIST_ORDERS({ commit }, payload) {
      commit("SET_IS_LOADING", true);
      try {
        const ListOrders = await ordersService.getAllOrders(payload);
        commit("SET_LIST_ORDERS", ListOrders);
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async ADD_ORDER({ commit }, payload) {
      try {
        const result = await ordersService.setOrder(payload);
        console.log(result);
        // commit ('SET_ORDER',Order)
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
    async REMOVE_ORDER({ commit }, payload) {
      try {
        const result = await ordersService.deleteOrder(payload);
        if (result == 200) {
          const arrNew = this.state.ListOrders.filter(
            (el) => el.id_order !== payload.id_order
          );
          commit("SET_LIST_ORDERS", arrNew);
        }
      } catch (e) {
        commit("SET_ERROR", e);
      }
    },
    async READ_LIST_SPECIALITY({ commit }) {
      commit("SET_IS_LOADING", true);
      try {
        const data = await clinicService.getSpeciality();
        commit("SET_LIST_SPECIALITY", data);
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async SET_IS_AUTH({ commit }, payload) {
      commit("SET_ERROR", null);
      commit("SET_IS_LOADING", true);
      try {
        const data = await authService.setLogin(payload);
        localStorage.setItem("current_user", data.id_user);
        localStorage.setItem("user_email", data.email);
        commit("SET_USER", data.id_user);
      } catch (e) {
        commit("SET_ERROR", "Неверный e-mail и/или пароль");
        commit("SET_USER", null);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async CREATE_ACCOUNT({ commit }, payload) {
      console.log(payload);
      commit("SET_ERROR", null);
      commit("SET_IS_LOADING", true);
      try {
        const data = await authService.setAccount(payload);
        localStorage.setItem("current_user", data.id_user);
        localStorage.setItem("user_email", data.email);
        commit("SET_USER", data.id_user);
      } catch (e) {
        commit("SET_ERROR", e);
        commit("SET_USER", null);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async READ_LIST_PATIENTS({ commit }, payload) {
      commit("SET_IS_LOADING", true);
      try {
        const LIST_PATIENTS = await patientService.getAllPatients(payload);
        commit("SET_LIST_PATIENTS", LIST_PATIENTS);
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async REMOVE_PATIENT({ commit }, payload) {
      commit("SET_IS_LOADING", true);
      try {
        const result = await patientService.deletePatient(payload);
        if (result === 200) {
          const arrNew = this.state.ListPatients.filter(
            (el) => el.id !== payload
          );
          commit("SET_LIST_PATIENTS", arrNew);
        }
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async ADD_PATIENT({ commit }, payload) {
      console.log("payload", payload);
      commit("SET_IS_LOADING", true);
      commit("SET_ERROR", null);
      const id_user = localStorage.getItem("current_user");
      console.log(id_user);
      try {
        await patientService.createPatient(payload, id_user);
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async EDIT_PATIENT({ commit }, payload) {
      commit("SET_IS_LOADING", true);
      commit("SET_ERROR", null);
      try {
        await patientService.updatePatient(payload);
      } catch (e) {
        commit("SET_ERROR", e);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
  },
});

export default store;
