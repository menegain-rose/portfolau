import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AProposView from '../views/AProposView.vue'
import DesignView from '../views/DesignView.vue'
import DeveloppementView from '../views/DeveloppementView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/APropos', name: 'APropos', component: AProposView },
    { path: '/Design', name: 'Design', component: DesignView },
    { path: '/Developpement', name: 'Developpement', component: DeveloppementView },
    { path: '/PageNotFound', name: 'PageNotFound', component: PageNotFoundView },
  ]
})

export default router
