export default {
  roles: [
    {
      label: 'Giáo vụ',
      value: 'ADMIN',
    },
    {
      label: 'Giáo viên',
      value: 'MANAGER',
    },
  ],
  genders: [
    {
      label: 'Nam',
      value: 'male',
    },
    {
      label: 'Nữ',
      value: 'female',
    },
    {
      label: 'Khác',
      value: 'other',
    },
  ],
  periods: [
    {
      label: 'Kì 1',
      value: 1,
    },
    {
      label: 'Kì 2',
      value: 2,
    },
    {
      label: 'Kì 3',
      value: 3,
    },
  ],
  reportTypes: {
    1: {
      value: 'Đi muộn',
      colorStyle: 'rgb(251, 231, 198)',
    },
    2: {
      value: 'Về sớm',
      colorStyle: 'rgb(168, 216, 168)',
    },
    3: {
      value: 'Đi muộn, về sớm',
      colorStyle: 'rgb(48, 144, 192)',
    },
    4: {
      value: 'Nghỉ',
      colorStyle: 'rgb(241, 241, 241)',
    },
    5: {
      value: 'Đúng giờ',
      colorStyle: 'rgb(240, 120, 72)',
    },
  },
  shifts: {
    1: {
      start: 25200,
      end: 32400,
    },
    2: {
      start: 32400,
      end: 39600,
    },
    3: {
      start: 43200,
      end: 50400,
    },
    4: {
      start: 50400,
      end: 57600,
    },
    5: {
      start: 57600,
      end: 64800,
    },
  },
};
