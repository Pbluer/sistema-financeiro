import { createRouter, createWebHistory } from 'vue-router'

import { useGlobalVariableState } from "@/stores/globalVariable"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: 'login' },
      meta: { autentication: false }
    },
    {
      path: '/login',
      name: 'loginUsuario',
      component: () => import('../views/loginView.vue'),
      meta: { autentication: false }
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/inicialView.vue'),
      meta: { autentication: true }
    },
    {
      path: '/cadastrar',
      name: 'cadastrarUsuario',
      component: () => import('../views/cadastrarView.vue'),
      meta: { autentication: true }
    },

    // Cartao
    {
      path: '/cartao',
      name: 'cartao',
      redirect: { name: 'cartaoFiltro' },
      meta: { autentication: true },
      children:[
        { 
          path:'filtro',
          name: 'cartaoFiltro',
          component: () => import('../views/cartao/cartaoFiltroView.vue'),
          meta: { autentication: true }
        }
      ]
      
    },

    // Compras
    {
      path: '/compras',
      name: 'compras',
      redirect: { name: 'comprasFiltro' },
      meta: { autentication: true },
      children:[
        { 
          path:'filtro',
          name: 'comprasFiltro',
          component: () => import('../views/compras/comprasFiltroView.vue'),
          meta: { autentication: true }
        },
      ]
      
    },

    // Mercado
    { 
      path:'/mercado',
      name: 'mercadoCadastro',
      component: () => import('../views/mercado/mercadoCadastroView.vue'),
      meta: { autentication: true }
    }
  ]
})

export default router
