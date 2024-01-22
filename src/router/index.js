import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TopRatedView from '../views/TopRatedView.vue'
import TrendingView from '../views/TrendingView.vue'
import UpcomingView from '../views/UpcomingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/top-rated',
      name: 'top-rated',
      component: TopRatedView
    },
    {
      path: '/trending',
      name: 'trending',
      component: TrendingView
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: UpcomingView
    }
  ]
})

export default router
