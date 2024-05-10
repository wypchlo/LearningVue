import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/ProjectsView.vue'),
    },
    {
        path: '/projects/add',
        name: 'AddProject',
        component: () => import('../views/AddProjectView.vue'),
    },
    {
        path: '/',
        redirect: '/projects'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router