import { createRouter, createWebHistory } from 'vue-router'
import ListCommitView from '../views/ListCommitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListCommitView
    }
  ]
})

export default router
