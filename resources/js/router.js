import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from './views/pages/Home';
import About from './views/pages/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
