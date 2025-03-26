import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/homepage.vue';
import FoodDetail from '../components/FoodDetailPage.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'FoodDetail',
    path: '/food-details',
    component: FoodDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
