export const DatePickershortcuts = [
  {
    text: 'Hôm nay',
    value: new Date(),
  },
  {
    text: 'Hôm qua',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: 'Tuần trước',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
