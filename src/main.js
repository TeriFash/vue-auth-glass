import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./assets/scss/main.scss";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin, BIcon } from 'bootstrap-vue';
import VueDarkMode from "@vue-a11y/dark-mode";


Vue.use(Vuelidate);
Vue.use({VueDarkMode, BootstrapVue, IconsPlugin});

Vue.config.productionTip = false;

new Vue({
  components: {
    BIcon
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
