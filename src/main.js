import "animate.css"
import './assets/main.css'
import './assets/js/jquery'
import './assets/js/jquery.mask.js'
import './registerServiceWorker'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//Cadastra os componentes global
import logoIcon from '@/components/icons/logoIcon.vue'
import menuLateral from '@/components/menuLateral.vue'
import buttonBase from '@/components/base/buttonBase.vue'
import modalBase from '@/components/base/modalBase.vue'

app.component('LogoIcon', logoIcon)
    .component('MenuLateral',menuLateral)
    .component('ButtonBase',buttonBase)
    .component('ModalBase',modalBase)

import utils from './assets/js/utils'
import globalVariable from './assets/js/globalVariable'

app.use(router)
    .use(utils)
    .use(globalVariable)

app.mount('#app')
