import globalComponents from './globalComponents';
//import BootstrapVue from 'bootstrap-vue';
import Fragment from 'vue-fragment';
import '@/assets/css/common.css';
import '@/assets/css/simplebar.css';
import '@/assets/css/style.css';
import '@/assets/css/free.min.css';
//import '@/assets/js/coreui.bundle.js';
//import '@/assets/js/coreui.esm.js';
//import '@/assets/js/coreui.js';
//import '@/assets/js/simplebar.min.js';

//import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrap/coreui.bundle.min.js';
//import '../bootstrap/coreui.esm.min.js';
//import '../bootstrap/coreui.min.js';
import '../bootstrap/simplebar.min.js';
export default {
	install(Vue) {
		//Vue.use(BootstrapVue);
		Vue.use(Fragment.Plugin);
		Vue.use(globalComponents);
	},
};
