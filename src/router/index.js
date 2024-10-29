import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: 'login' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue')
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/inicialView.vue')
    },

    // Cartao
    {
      path: '/cartao',
      name: 'cartao',
      component: () => import('../views/cartao/indexCartaoView.vue'),
      children:[
        { 
          path:'filtro',
          name: 'cartaoFiltro',
          component: () => import('../views/cartao/cartaoFiltroView.vue') 
        },
        { 
          path:'cadastro',
          name: 'cartaoCadastro',
          component: () => import('../views/cartao/cartaoCadastroView.vue') 
        },
      ]
      
    },

    // Compras
    {
      path: '/compras',
      name: 'compras',
      component: () => import('../views/compras/indexComprasView.vue'),
      children:[
        { 
          path:'filtro',
          name: 'comprasFiltro',
          component: () => import('../views/compras/comprasFiltroView.vue') 
        },
        { 
          path:'cadastro',
          name: 'comprasCadastro',
          component: () => import('../views/compras/comprasCadastroView.vue') 
        },
      ]
      
    },

    // Mercado
    { 
      path:'/mercado',
      name: 'mercadoCadastro',
      component: () => import('../views/mercado/mercadoCadastroView.vue') 
    }
  ]
})

export default router
