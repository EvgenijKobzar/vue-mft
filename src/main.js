import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus)

// import httpClient from "./http-client/index.js";
// const endpoint = 'http://m.ft24.ru/rest/'
// const cmd = 'mft.preset.getFields'
// const cmd = 'mft.preset.add'
//const params = 'fields[code]=fuel&fields[type]=system&fields[active]=Y';
// httpClient.get( endpoint + cmd, 'fields[code]=task&fields[type]=system&fields[active]=Y')
// httpClient.get( endpoint + cmd, 'fields[code]=cargo&fields[type]=system&fields[active]=Y')
// httpClient.get( endpoint + cmd, 'fields[code]=check&fields[type]=system&fields[active]=Y')
// httpClient.get( endpoint + cmd, 'fields[code]=fuel&fields[type]=system&fields[active]=Y')
	// .then((result) => console.log(result));

createApp(App).use(router).mount('#app')
