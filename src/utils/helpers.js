/* eslint-disable no-unused-vars */
import moment from 'moment-timezone';
import Constant from '@/const/const';

moment.tz.setDefault('Asia/Ho_Chi_Minh');

export default {
  convertRole(role) {
    if (role === 'MANAGER') return 'Giáo viên';
    else if (role === 'ADMIN') return 'Giáo vụ';
    return '';
  },

  defaultReportMonthFilter() {
    const m = moment();

    const curYear = m.year();
    const curMonth = m.month();

    let curPeriod;
    if (curMonth >= 1 && curMonth < 6) {
      curPeriod = 1;
    } else if (curMonth >= 6 && curMonth < 9) {
      curPeriod = 2;
    } else {
      curPeriod = 3;
    }

    return {
      curYear: `${curYear}`,
      curPeriod,
    };
  },

  generateDays(curYear, curPeriod) {
    let month = curPeriod * 3; // tháng bắt đầu từ 0 - 11
    const days = [];

    for (let i = 0; i < 3; i++) {
      const monday = moment()
        .year(+curYear)
        .month(month)
        .date(1)
        .startOf('month')
        .day('Monday');
      const friday = moment()
        .year(+curYear)
        .month(month)
        .date(1)
        .startOf('month')
        .day('Tuesday');

      // .day('Monday') có thể bị lùi về tháng trước đó nên phải cộng 7 ngày
      if (monday.date() > 7) monday.add(7, 'd');
      if (friday.date() > 7) friday.add(7, 'd');

      while (monday.month() === month) {
        let m = {
          day: monday.format('DD-MM-yyyy'),
          shift: 1,
        };
        let f = {
          day: friday.format('DD-MM-yyyy'),
          shift: 3,
        };

        if (friday.isBefore(monday)) {
          days.push(f);
          days.push(m);
        } else {
          days.push(m);

          if (friday.month() === month) days.push(f);
        }

        monday.add(7, 'd');
        friday.add(7, 'd');
      }

      month++;
    }

    return days;
  },

  formatDate(date) {
    return moment(date).utc().format('DD-MM-yyyy');
  },

  formatTime(date) {
    return moment(date).utc().format('HH:mm:ss');
  },

  formatDateTz(date) {
    return moment(date).format('DD-MM-yyyy');
  },

  convertToSecs(time) {
    const cur = moment(time).utc();

    const startOfDay = moment(time).utc().startOf('day');

    const passed = cur.diff(startOfDay, 'seconds');

    return passed;
  },

  convertSecsToHour(secs) {
    const duration = moment.duration(secs, 'seconds');
    const formattedTime = moment
      .utc(duration.asMilliseconds())
      .format('HH:mm:ss');
    return formattedTime;
  },

  reportIdentifiedType(data, shift) {
    // lưu ý: k convert timezone do be trả về sai timezone
    // Nếu trong 1 ngày có 2 kíp thì check kiểu gì ?
    const { start, end } = Constant.shifts[shift];

    data = data
      .map((d) => {
        return { ...d, timeInSecs: this.convertToSecs(d.time) };
      })
      .sort((a, b) => a.timeInSecs - b.timeInSecs); // sort tăng dần theo thời gian

    // giả sử chỉ có 1 kíp trong 1 ngày nên chỉ check đầu cuối
    const checkIn = data[0].timeInSecs;
    const checkOut = data.at(-1).timeInSecs;

    let status = 5;
    // if (checkIn <= start) {
    //   if (checkOut !== checkIn && checkOut <= end) {
    //     status = 2; // về sớm
    //   } else {
    //     status = 5; // đúng giờ
    //   }
    // } else if (checkIn <= end) {
    //   if (checkOut !== checkIn && checkOut <= end) {
    //     status = 3; // đi muộn, về sớm
    //   } else {
    //     status = 1; // đi muộn
    //   }
    // } else {
    //   status = 4; // nghỉ
    // }
    return {
      status,
      checkIn: this.convertSecsToHour(checkIn),
      checkOut: this.convertSecsToHour(checkOut),
    };
  },

  // lấy ra ngày đầu và cuối của tuần, truyền vào ngày đầu tiên lấy ra từ week datepicker
  getWeek(date) {
    const timeFrom = moment(date);

    // Lấy ngày cuối của tuần
    const timeTo = timeFrom.clone().endOf('isoWeek');

    return {
      timeFrom: timeFrom.format('DD-MM-yyyy'),
      timeTo: timeTo.format('DD-MM-yyyy'),
    };
  },

  timestampToDateString(timestamp) {
    const formattedDate = moment(timestamp * 1000).format('DD-MM-yyyy');
    return formattedDate;
  },

  getToday() {
    return moment();
  },

  getTodayFormatted(today) {
    return today.clone().format('DD/MM/yyyy');
  },

  getTodayFormatted2(today) {
    return today.clone().format('yyyy-MM-DD');
  },

  backDay(today) {
    return today.clone().subtract(1, 'days');
  },

  forwardDay(today) {
    return today.clone().add(1, 'days');
  },
};
