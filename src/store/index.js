import { createStore } from 'vuex';
import authModule from '@/store/auth/index';
import userModule from '@/store/users/index';
import reportMonthModule from '@/store/report-month/index';
import reportHistoryModule from '@/store/report-history/index';
import reportDailyModule from '@/store/report-daily/index';
import leaveModule from '@/store/leaves/index';

export default createStore({
  modules: {
    auth: authModule,
    users: userModule,
    reportMonth: reportMonthModule,
    reportHistory: reportHistoryModule,
    reportDaily: reportDailyModule,
    leaves: leaveModule,
  },
  state() {
    return {
      reportDailyData: [
        {
          id: 'B19DCCN386',
          name: 'Đặng Quốc Long',
          status: 'Vắng',
          permission: 1,
        },
        {
          id: 'B19DCCN386',
          name: 'Đặng Quốc Long',
          status: 'Vắng',
          permission: 0,
        },
      ],
      reportIdentifiedData: [
        {
          id: 'B19DCCN386',
          name: 'Đặng Quốc Long',
          camera: 'cam 1',
          date: '2023-10-10',
          time: '09:00:00',
          image: 'image...',
        },
      ],
      leaveRegistrationData: [
        {
          date: '2023-10-10',
          info: '...',
          status: 'Đã duyệt',
          type: 'Đi muộn',
          approver: 'Nguyễn Văn A',
        },
      ],
      teachers: [
        {
          id: 'B19DCCN386',
          name: 'Đặng Quốc Long',
          email: 'example@example.com',
          major: 'CNTT',
          role: 'Giáo viên',
        },
        {
          id: 'B19DCCN386',
          name: 'Đặng Quốc Long',
          email: 'example@example.com',
          major: '',
          role: 'Giáo vụ',
        },
      ],
      leaveRequests: [
        {
          date: '2023-10-10',
          teacherId: 'B19DCCN386',
          name: 'Đặng Quốc Long',
          info: '...',
          type: 'Đi muộn',
          status: 0, // chưa duyệt
          approver: '', // chưa duyệt thì không có data
        },
        {
          date: '2023-11-10',
          teacherId: 'B19DCCN386',
          name: 'Đặng Quốc Long',
          info: '...',
          type: 'Đi muộn',
          status: 1, // đã duyệt
          approver: 'Nguyễn Văn A',
        },
      ],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
});
