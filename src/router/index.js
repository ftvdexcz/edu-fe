import { createWebHistory, createRouter } from 'vue-router';

import IdentifiedReport from '../views/IdentifiedReport.vue';
import OrganizationManager from '../views/OrganizationManager.vue';
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
      path: '/organization',
      component: OrganizationManager,
    },
    {
      path: '/users',
      component: null,
    },
  ],
});

export default router;
