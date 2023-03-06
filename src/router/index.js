import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonajesVivos from '../views/PersonajesVivos.vue'
import PersonajesMuertos from '../views/PersonajesMuertos.vue'
import Episode from '../views/Episode.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personajes',
    name: 'personajes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Personajes.vue')
  },
  {
    path: '/personajes/vivos', 
    name: 'personajes-vivos',
    component: PersonajesVivos
  }, 
  {
    path: '/personajes/muertos', 
    name: 'personajes-muertos',
    component: PersonajesMuertos
  }, 
  {
    path: '/episodios', 
    name: 'Episodios',
    component: Episode
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
