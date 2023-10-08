import { createWebHistory, createRouter } from 'vue-router';

import IdentifiedReport from '../views/IdentifiedReport.vue';
import DailyReport from '../views/DailyReport.vue';
import MonthlyReport from '../views/MonthlyReport.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/identified-report',
    },
    {
      path: '/identified-report',
      component: IdentifiedReport,
    },
    {
      path: '/monthly-report',
      component: MonthlyReport,
    },
    {
      path: '/daily-report',
      component: DailyReport,
    },
    {
      path: '/users',
      component: null,
    },
  ],
});

export default router;
