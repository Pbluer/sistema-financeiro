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
import alertBase from '@/components/base/alertBase.vue'

app.component( 'LogoIcon', logoIcon )
    .component( 'MenuLateral',menuLateral )
    .component( 'ButtonBase',buttonBase )
    .component( 'ModalBase',modalBase )
    .component( 'Alert',alertBase )

import utils from './assets/js/utils'
import globalVariable from './assets/js/globalVariable'

app.use(router)
    .use(globalVariable)
    .use(utils)

app.mount('#app')