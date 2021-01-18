import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Particles from "particles.vue";
Vue.use(Particles);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

