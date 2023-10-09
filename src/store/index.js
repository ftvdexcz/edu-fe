import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      reportMonthlyData: [
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
        {
          date: '2023-10-04',
          time: '09:00:00',
          status: 'Đi muộn',
        },
      ],
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
  modules: {},
});
