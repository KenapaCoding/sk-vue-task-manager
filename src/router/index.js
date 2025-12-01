import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import TaskDetail from '@/views/TaskDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/task/:id', component: TaskDetail}
  ],
})

export default router
