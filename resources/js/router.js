import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from './views/pages/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
