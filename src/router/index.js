import { createWebHistory, createRouter } from "vue-router";
import Page from "../components/page.vue";
import List from "../components/list.vue";
import ItemAdd from "../components/item-add.vue";
import ItemUpd from "../components/item-upd.vue";
import ItemGet from "../components/item-get.vue";
import Navbar from "../components/navbar.vue";



// const taskList = { template: '<div>taskList</div>' }
// const taskStartAdd = { template: '<div>taskStartAddss 1 {{ pressetId }}</div>' }
// const taskStartUpd = { template: '<div>taskStartUpd</div>' }
// const taskFinishAdd = { template: '<div>taskFinishAdd</div>' }
// const taskFinishUpd = { template: '<div>taskFinishUpd</div>' }
// const taskFinishGet = { template: '<div>taskFinishGet</div>' }

// const routes= [
// 	{path: "/task/list", 								name: "taskList", component: taskList,},
// 	{path: "/task/start/:pressetId/add", 				name: "taskStartAdd", component: taskStartAdd, props: true,},
// 	{path: "/task/start/:pressetId/upd/:reportId", 		name: "taskStartUpd", component: taskStartUpd, props: true,},
// 	{path: "/task/finish/:pressetId/add/:reportId", 	name: "taskFinishAdd", component: taskFinishAdd, props: true,},
// 	{path: "/task/finish/:pressetId/upd/:reportId", 	name: "taskFinishUpd", component: taskFinishUpd, props: true,},
// 	{path: "/task/finish/:pressetId/get/:reportId", 	name: "taskFinishGet", component: taskFinishGet, props: true,},
// ];

const routes = [
	// { path: "/task/list", component: List },
	// { path: "/task/start/add/:presetId/:reportId", component: Page },
	// { path: "/task/start/:presetId/upd/:reportId", component: Page },
	// :preset/:action - 10/add

	{
		path: '/task/list',
		components: { default: List, navbar: Navbar },
		meta: {
			relation: [
				{ icon: '', path: '/cargo/list'},
				{ icon: '', path: '/check/list'},
				{ icon: '', path: '/fuel/list'},
			]
		}
	},
	{ path: '/task/add', component: ItemAdd },
	{ path: '/task/upd', component: ItemUpd },
	{ path: '/task/get', component: ItemGet },

	{
		path: '/cargo/list',
		components: {default: List, navbar: Navbar},
		meta: { relation: [{ path: '/task/list'}]}
	},
	{ path: '/cargo/add', component: ItemAdd },
	{ path: '/cargo/upd', component: ItemUpd },
	{ path: '/cargo/get', component: ItemGet },

	{
		path: '/fuel/list',
		components: {default: List, navbar: Navbar},
		meta: { relation: [{ path: '/task/list'}]}
	},
	{ path: '/fuel/add', component: ItemAdd },
	{ path: '/fuel/upd', component: ItemUpd },
	{ path: '/fuel/get', component: ItemGet },

	{
		path: '/check/list',
		components: {default: List, navbar: Navbar},
		meta: { relation: [{ path: '/task/list'}]}
	},
	{ path: '/check/add', component: ItemAdd },
	{ path: '/check/upd', component: ItemUpd },
	{ path: '/check/get', component: ItemGet },


	// // { path: "/:presetCode/list",	component: List },
	// { path: "/:presetCode/add",		component: ItemAdd },
	// { path: "/:presetCode/upd",		component: ItemUpd },
	// { path: "/:presetCode/get",		component: ItemGet },

	// :presetCode/list
	// task/	list
	// check/	list?filter[taskId]=1
	// fuel/	list?filter[taskId]=1
	// cargo/	list?filter[taskId]=1
	// custom/	list?filter[taskId]=1

	// fuel/get?id=36
	// fuel/upd?id=36&fields[]
	// fuel/add?fields[taskId]=1
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;