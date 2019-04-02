// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import iView from "iview";
import "iview/dist/styles/iview.css";
// import "lib-flexible";
import VueResource from "vue-resource";
Vue.use(VueResource);
import router from "./router";

Vue.config.productionTip = false;
Vue.use(iView);

Vue.prototype.bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
