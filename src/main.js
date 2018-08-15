// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // element-ui的css

import 'normalize.css/normalize.css'; // 标准化css
import '@/styles/index.scss'; // 全局 css

import VCharts from 'v-charts';

Vue.config.productionTip = false;
Vue.use(ElementUI); //  引入
Vue.use(VCharts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
