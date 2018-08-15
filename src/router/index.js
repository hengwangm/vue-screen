import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Ems from '@/views/Ems';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ems',
    name: 'Ems',
    component: Ems
  }
  ]
});
