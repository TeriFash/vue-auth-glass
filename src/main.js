import Vue from "vue";
import { BootstrapVue, IconsPlugin, BIcon } from 'bootstrap-vue';
import VueDarkMode from "@vue-a11y/dark-mode";
import App from "./App.vue";
import AOS from "aos";
import "./assets/scss/main.scss";
import "aos/dist/aos.css";
import VueParallaxJs from "vue-parallax-js";
import VueScrollTo from "vue-scrollto";
import VTooltip from "v-tooltip";
import router from "./router";
import store from "./store";

const VueCookie = require("vue-cookie");

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
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
  components: {
    BIcon
  },
  store,
  router,
  render: h => h(App)
}).$mount("#app");
