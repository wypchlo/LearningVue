import {createRouter, createWebHistory} from 'vue-router'

const routes = [
   {
      path: '/',
      name: 'home',
      component: () => import('../components/HelloWorld.vue')
   } 
]

const router = createRouter({
    history: createWebHistory(process.env.BASE.URL),
    routes
})

export default router