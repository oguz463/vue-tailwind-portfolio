/* Import Tailwind */
require('./styles/tailwind.css');

/* Import Vue */
window.Vue = require('vue').default;

/* Register page layout globally */
import layout from './layout/App.vue';

/* Import Vue Router and Routes */
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './routes';

/* Create Vue Instance */
const app = new Vue({
	render: h => h(layout),
    router: new VueRouter(routes)
}).$mount('#app');
