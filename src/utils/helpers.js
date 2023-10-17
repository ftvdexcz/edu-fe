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
    let month = curPeriod * 3 - 1; // tháng bắt đầu từ 0 - 11
    const days = [];

    for (let i = 0; i < 3; i++) {
      const monday = moment()
        .year(+curYear)
        .month(month)
        .date(1)
        .startOf('month')
        .day('Monday');
      const wednesday = moment()
        .year(+curYear)
        .month(month)
        .date(1)
        .startOf('month')
        .day('Wednesday');

      // .day('Monday') có thể bị lùi về tháng trước đó nên phải cộng 7 ngày
      if (monday.date() > 7) monday.add(7, 'd');
      if (wednesday.date() > 7) wednesday.add(7, 'd');

      while (monday.month() === month) {
        let m = {
          day: monday.format('DD-MM-yyyy'),
          shift: 1,
        };
        let w = {
          day: wednesday.format('DD-MM-yyyy'),
          shift: 3,
        };

        if (wednesday.isBefore(monday)) {
          days.push(w);
          days.push(m);
        } else {
          days.push(m);

          if (wednesday.month() === month) days.push(w);
        }

        monday.add(7, 'd');
        wednesday.add(7, 'd');
      }

      month++;
    }

    return days;
  },

  formatDate(date) {
    return moment(date).utc().format('DD-MM-yyyy');
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

    let status;
    if (checkIn <= start) {
      if (checkOut !== checkIn && checkOut <= end) {
        status = 2; // về sớm
      } else {
        status = 5; // đúng giờ
      }
    } else if (checkIn <= end) {
      if (checkOut !== checkIn && checkOut <= end) {
        status = 3; // đi muộn, về sớm
      } else {
        status = 1; // đi muộn
      }
    } else {
      status = 4; // nghỉ
    }
    return {
      status,
      checkIn: this.convertSecsToHour(checkIn),
      checkOut: this.convertSecsToHour(checkOut),
    };
  },
};
