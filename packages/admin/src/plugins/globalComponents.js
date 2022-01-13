import Header from '@/components/layout/Header';
import Side from '@/components/layout/Side';
import Footer from '@/components/layout/Footer';

export default {
	install(Vue) {
		Vue.component(Header.name, Header);
		Vue.component(Side.name, Side);
		Vue.component(Footer.name, Footer);
	},
};
