import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Article.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/services/api',
        name: 'Api',
        component: () => import('../components/services/Api.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router