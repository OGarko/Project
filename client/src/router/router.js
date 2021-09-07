import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage";
import LoginPage from "../views/LoginPage";
import DoctorsPage from "../views/DoctorsPage";
import RegistrationPage from "../views/RegistrationPage";
import InformationPage from "../views/InformationPage";
import ProfilePage from "../views/ProfilePage";
import PatientPage from "../views/PatientPage";
import TicketsPage from "../views/TicketsPage";
import SpecialistyPage from "../views/SpecialistyPage";
import OrderPage from "../views/OrderPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainPage,
  },

  {
    path: "/specialisty",
    name: "specialisty",
    component: SpecialistyPage,
  },
  {
    path: "/information",
    component: InformationPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/doctors",
    name: "doctors",
    component: DoctorsPage,
  },
  {
    path: "/registration",
    component: RegistrationPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/patient",
    component: PatientPage,
  },
  {
    path: "/tickets",
    name: "tickets",
    component: TicketsPage,
  },
  {
    path: "/order",
    name: "order",
    component: OrderPage,
  },
];
export default new VueRouter({
  mode: "history",
  routes,
});
