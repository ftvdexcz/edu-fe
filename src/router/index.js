import { createWebHistory, createRouter } from 'vue-router';

import IdentifiedReport from '@/views/IdentifiedReport.vue';
import DailyReport from '@/views/DailyReport.vue';
import MonthlyReport from '@/views/MonthlyReport.vue';
import LeaveRegistration from '@/views/LeaveRegistration.vue';
import TeacherDashboard from '@/views/TeacherDashboard.vue';
import LeaveRequest from '@/views/LeaveRequest.vue';
import CreateTeacher from '@/components/dashboard/teachers/CreateTeacher.vue';
import UserAuth from '@/views/UserAuth.vue';
import MainApp from '@/views/MainApp.vue';
import UserProfile from '@/views/UserProfile.vue';
import NotFound from '@/views/NotFound.vue';

import store from '@/store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainApp,
      redirect: 'identified-report',
      children: [
        {
          path: 'identified-report',
          component: IdentifiedReport,
        },
        {
          path: 'monthly-report',
          component: MonthlyReport,
        },
        {
          path: 'daily-report',
          component: DailyReport,
        },
        {
          path: 'leave',
          component: LeaveRegistration,
        },
        {
          path: 'profile',
          component: UserProfile,
        },
        {
          path: 'teachers',
          component: TeacherDashboard,
          children: [
            {
              path: 'new',
              component: CreateTeacher,
            },
          ],
        },
        {
          path: 'requests',
          component: LeaveRequest,
        },
      ],
    },
    {
      path: '/login',
      component: UserAuth,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const unAuthPages = ['/login'];
  const authRequired = !unAuthPages.includes(to.path);

  if (authRequired && !store.getters['auth/getTokens']) {
    return next('/login');
  } else if (!authRequired && store.getters['auth/getTokens']) {
    return next('/');
  }

  next();
});

export default router;
