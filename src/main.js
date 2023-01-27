import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

library.add(faPlus)

const endpoint = 'http://m.ft24.ru/rest'
const cmd = '/mft.preset.getFields'
// const cmd = 'mft.preset.add'
// httpClient.get( endpoint + cmd, 'fields[code]=task&fields[type]=system&fields[active]=Y')
// httpClient.get( endpoint + cmd, 'fields[code]=cargo&fields[type]=system&fields[active]=Y')
// httpClient.get( endpoint + cmd, 'fields[code]=check&fields[type]=system&fields[active]=Y')
// httpClient.get( endpoint + cmd, 'fields[code]=fuel&fields[type]=system&fields[active]=Y')
	// .then((result) => console.log(result));

// axios({
// 	method: 'get',
// 	baseURL: endpoint,
// 	url: cmd,
// 	params: {
// 		fields: {
// 			code: 'task',
// 			type: 'system',
// 			active: 'Y',
// 		}
// 	}
// })
// .then(function (response) {
// 	// обработка успешного запроса
// 	console.log(response);
// })
// .catch(function (error) {
// 	// обработка ошибки
// 	console.log(error);
// })



createApp(App).use(router).mount('#app')
