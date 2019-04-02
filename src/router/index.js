import Vue from "vue";
import home from "@/components/home.vue";
import Login from "@/components/head/login.vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  bash: "/",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      component: home
    }
  ]
});
