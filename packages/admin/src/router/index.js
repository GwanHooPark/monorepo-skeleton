import Vue from 'vue';
import VueRouter from 'vue-router';
import SubMenuAccount from './submenu/account';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		//redirect: { name: 'Form' },
		component: () => import('@/components/layout/DefaultLayout'),
		children: [SubMenuAccount],
	},
	// {
	// 	path: '*',
	// 	component: () => import('@/views/common/NotFound.vue'),
	// },
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
