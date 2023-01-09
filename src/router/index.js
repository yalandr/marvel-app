import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/character/:id',
    name: 'character',
    component: () => import('../components/CharacterPage.vue')
  },
  {
    path: '/comics',
    name: 'comics',
    component: () => import('../components/ComicsPage.vue')
  },
  {
    path: '/comic/:id',
    name: 'comic',
    component: () => import('../components/ComicPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
