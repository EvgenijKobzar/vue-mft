import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus)

import httpClient from "./http-client/index.js";
httpClient.get( 'http://m.ft24.ru/rest/mft.preset.getFields.json', null, function(xhr) {
	//console.log( JSON.parse( xhr.responseText ) );
	//response = JSON.parse( xhr.responseText );

	//console.log( list, gists );
}).then((result) => console.log( result));

createApp(App).use(router).mount('#app')
