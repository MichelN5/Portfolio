import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Project from '../views/Project'
const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/project/:project_slug/',
    name: 'project',
    component: Project 
    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
