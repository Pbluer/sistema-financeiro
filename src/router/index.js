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
      redirect: { name: 'cartaoFiltro' },
      children:[
        { 
          path:'filtro',
          name: 'cartaoFiltro',
          component: () => import('../views/cartao/cartaoFiltroView.vue') 
        }
      ]
      
    },

    // Compras
    {
      path: '/compras',
      name: 'compras',
      redirect: { name: 'comprasFiltro' },
      children:[
        { 
          path:'filtro',
          name: 'comprasFiltro',
          component: () => import('../views/compras/comprasFiltroView.vue') 
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
