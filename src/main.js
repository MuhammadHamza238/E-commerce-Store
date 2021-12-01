import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  
  vuetify,
  render: (h) => h(App),
  store:store,
  router:router,
}).$mount("#app");
