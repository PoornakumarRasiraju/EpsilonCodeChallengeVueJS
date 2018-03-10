import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.prototype.$bus = new Vue({});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
