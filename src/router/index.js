import { createWebHistory, createRouter } from "vue-router";
import Page from "../components/page.vue";
import List from "../components/list.vue";

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

	{ path: "/task/list",				component: List },
	{ path: "/task/:presetId/:action",	component: Page },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;