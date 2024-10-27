import "animate.css"
import './assets/main.css'


import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//Cadastra os componentes global
import logoIcon from '@/components/icons/logoIcon.vue';
import menuLateral from '@/components/menuLateral.vue';
import buttonBase from '@/components/base/buttonBase.vue';
import inputBase from '@/components/base/inputBase.vue';
import linkButtonBase from '@/components/base/linkButtonBase.vue';
import selectBase from '@/components/base/selectBase.vue';

app.component('LogoIcon', logoIcon)
    .component('MenuLateral',menuLateral)
    .component('ButtonBase',buttonBase)
    .component('InputBase',inputBase)
    .component('LinkButtonBase',linkButtonBase)
    .component('SelectBase',selectBase)

app.config.globalProperties.userName = 'Ramon'

app.use(router)

app.mount('#app')
