import Vue from "vue";
import VueDarkMode from "@vue-a11y/dark-mode";
import App from "@/App.vue";

import AOS from "aos";
import "aos/dist/aos.css";
import "@/css/main.scss";
import VueParallaxJs from "vue-parallax-js";
import VueScrollTo from "vue-scrollto";
import VTooltip from "v-tooltip";
import router from "@/router";
import store from "@/store";

const VueCookie = require("vue-cookie");

Vue.use(VTooltip);
Vue.use(VueScrollTo);
Vue.use(VueCookie);
Vue.use(VueParallaxJs);
Vue.use(VueDarkMode);

Vue.prototype.$eventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  store,
  router,
  render: h => h(App)
}).$mount("#app");
