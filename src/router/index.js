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
import StatisticDashboard from '@/views/StatisticsDashboard.vue';
import NotFound from '@/views/NotFound.vue';
import Forbidden from '@/views/ForbiddenPage.vue';

import store from '@/store/index';
import tokens from '@/utils/tokens';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainApp,
      redirect: 'monthly-report',
      children: [
        {
          path: 'identified-report',
          component: IdentifiedReport,
          beforeEnter(to, from, next) {
            if (tokens.checkRole(store.getters['auth/getRole'], 'ADMIN')) {
              next();
            }
            next('/forbbiden');
          },
        },
        {
          path: 'monthly-report',
          component: MonthlyReport,
        },
        {
          path: 'daily-report',
          component: DailyReport,
          beforeEnter(to, from, next) {
            if (tokens.checkRole(store.getters['auth/getRole'], 'MANAGER')) {
              next();
            }
            next('/forbbiden');
          },
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
          path: 'stats',
          component: StatisticDashboard,
          // beforeEnter(to, from, next) {
          //   if (tokens.checkRole(store.getters['auth/getRole'], 'ADMIN')) {
          //     next();
          //   }
          //   next('/forbbiden');
          // },
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
          beforeEnter(to, from, next) {
            if (tokens.checkRole(store.getters['auth/getRole'], 'ADMIN')) {
              next();
            }
            next('/forbbiden');
          },
        },
        {
          path: 'requests',
          component: LeaveRequest,
          beforeEnter(to, from, next) {
            if (tokens.checkRole(store.getters['auth/getRole'], 'ADMIN')) {
              next();
            }
            next('/forbbiden');
          },
        },
      ],
    },
    {
      path: '/login',
      component: UserAuth,
    },
    {
      path: '/forbbiden',
      component: Forbidden,
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
