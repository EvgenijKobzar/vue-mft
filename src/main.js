import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ReportCollection from "./lib/collection/report-collection.js";

library.add(faPlus)

const collection = new ReportCollection();

// collection.create({
// 	code: 'task',
// 	type: 'system',
// 	active: 'Y',
// 	sort: 100
// });
//
// collection.create({
// 	code: 'cargo',
// 	type: 'system',
// 	active: 'Y',
// 	sort: 200
// });
//
// collection.create({
// 	code: 'check',
// 	type: 'system',
// 	active: 'Y',
// 	sort: 300
// });
//
// collection.create({
// 	code: 'fuel',
// 	type: 'system',
// 	active: 'Y',
// 	sort: 400
// });


createApp(App).use(router).mount('#app')
