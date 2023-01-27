import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PresetCollection from "./lib/collection/preset-collection.js";

library.add(faPlus)

const collection = new PresetCollection();
collection.refreshByFilter({filter: {active: 'Y'}})
	.then(() => {
		console.log('preset-2', collection.getFieldsById(2))
		console.log('preset-3', collection.getFieldsById(3))
		console.log('preset-4', collection.getFieldsById(4))
		console.log('preset-2', collection.getFieldsById(2))
		console.log('preset-2', collection.getFieldsById(2))
		console.log('preset-3', collection.getFieldsById(3))
		console.log('preset-4', collection.getFieldsById(4))
		console.log('preset-2', collection.getFieldsById(2))
	});

createApp(App).use(router).mount('#app')
