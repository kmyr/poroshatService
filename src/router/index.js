import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home';
//poroshatfilter
import form from '../views/official-contract/form';
import preview from '../views/official-contract/preview';
import workers from '../views/workers/poroshat-workers';
import users from '../views/users/manage-users';
import login from '../views/login';
import logout from '../views/logout';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: home
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/official-contract',
		component: form
	},
	{
		path: '/official-contract/preview',
		component: preview
	},
	{
		path: '/workers/poroshat-filter',
		component: workers
	},
	{
		path: '/users',
		component: users
	},
	{
		path: '/logout',
		component: logout
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
