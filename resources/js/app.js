require('./bootstrap');

import Vue from 'vue';
import VueMoment from 'vue-moment';
import VueDataTables from 'vue-data-tables';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(VueMoment);
Vue.use(VueDataTables);
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

import App from './views/App';

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
