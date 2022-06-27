import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleRight,faAngleLeft)



createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


