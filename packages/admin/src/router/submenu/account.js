const account = {
	path: '/',
	name: '',
	meta: { breadCrumb: '회원관리' },
	component: {
		render(c) {
			return c('router-view');
		},
	},
	children: [
		{
			path: '/',
			meta: { breadCrumb: '아이디조회 및 관리', menuGroup: 'Account' },
			component: () => import('@/views/account/AccountManage.vue'),
		},
	],
};

export default account;
