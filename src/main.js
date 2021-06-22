import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import icons from '@/common/icons.js';
library.add(...icons);

const app = createApp(App);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
