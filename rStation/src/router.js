import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Bookings from "./views/Bookings.vue";
import Settings from "./views/Settings.vue";
import EmployeeSchedule from "./views/EmployeeSchedule.vue";
import Routes from "./views/Routes.vue";
import Trains from "./views/Trains.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tickets",
      name: "tickets",
      component: Home
    },
    {
      path: "/schedules",
      name: "schedules",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/bookings",
      name: "bookings",
      component: Bookings
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/routes",
      name: "routes",
      component: Routes
    },
    {
      path: "/employeeSchedule",
      name: "EmployeeSchedule",
      component: EmployeeSchedule
    },
    {
      path: "/Trains",
      name: "Trains",
      component: Trains
    }
  ]
});
