import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

createApp(App).use(router).mount('#app')
