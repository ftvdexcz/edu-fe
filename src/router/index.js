import { createWebHistory, createRouter } from 'vue-router';

import IdentifiedReport from '@/views/IdentifiedReport.vue';
import DailyReport from '@/views/DailyReport.vue';
import MonthlyReport from '@/views/MonthlyReport.vue';
import LeaveRegistration from '@/views/LeaveRegistration.vue';
import TeacherDashboard from '@/views/TeacherDashboard.vue';
import LeaveRequest from '@/views/LeaveRequest.vue';

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
      path: '/leave',
      component: LeaveRegistration,
    },
    {
      path: '/teachers',
      component: TeacherDashboard,
    },
    {
      path: '/requests',
      component: LeaveRequest,
    },
  ],
});

export default router;
