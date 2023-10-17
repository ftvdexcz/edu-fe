<template>
  <report-filter>
    <template #default>
      <div class="form-controll">
        <label for="period">Kì Học</label>
        <el-select id="period" v-model="period" placeholder="Chọn kì">
          <el-option
            v-for="item in periods"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="form-controll">
        <label for="year">Năm</label>
        <el-date-picker
          id="year"
          v-model="year"
          :disabled-date="disabledDate"
          type="year"
        />
      </div>
    </template>

    <template #actions>
      <el-button @click="search" color="#00CE68">Tìm kiếm</el-button>
      <el-button color="#308EE0">Xuất báo cáo</el-button>
    </template>
  </report-filter>
</template>

<script>
import { ElDatePicker, ElSelect, ElButton, ElMessage } from 'element-plus';
import { ref } from 'vue';
import ReportFilter from '@/components/ui/ReportFilter.vue';
import Constant from '@/const/const';
import helpers from '@/utils/helpers';
import { useStore } from 'vuex';
import factoryService from '@/services/factory.service';

const historyService = factoryService.get('histories');

// eslint-disable-next-line no-unused-vars
const reportMonth = async (store, curYear, curPeriod) => {
  const days = helpers.generateDays(curYear, curPeriod);
  const currentUser = store.getters['auth/getCurrentUser'];
  const user = currentUser.user;

  try {
    const response = await historyService.reportMonth({
      timeFrom: days[0].day.split('-').reverse().join('-'), // dd-MM-yyyy -> yyyy-MM-dd
      timeTo: days.at(-1).day.split('-').reverse().join('-'),
      userId: user.id,
    });

    if (response.status !== 200) throw new Error('Có lỗi xảy ra');

    const histories = response.data.results;

    const data = days.map((d) => {
      let obj = {
        ...d, // day, shift
        status: null,
        leavePermission: 0,
        checkIn: null,
        checkOut: null,
      };

      const match = histories.filter(
        (history) => helpers.formatDate(history.time) === d.day
      );

      if (match.length > 0) {
        const { status, checkIn, checkOut } = helpers.reportIdentifiedType(
          match,
          d.shift
        );
        obj.status = status;
        obj.checkIn = checkIn;
        obj.checkOut = checkOut;
      } else {
        obj.status = 4; // nghỉ
      }

      return obj;
    });

    store.commit('reportMonth/setData', data);
  } catch (err) {
    console.log(err);
    ElMessage.error(err);
  }
};

export default {
  components: {
    ElDatePicker,
    ElSelect,
    ReportFilter,
    ElButton,
  },
  setup() {
    const store = useStore();

    const disabledDate = (time) => {
      return time.getTime() > Date.now();
    };
    const { curYear, curPeriod } = helpers.defaultReportMonthFilter();

    reportMonth(store, curYear, curPeriod);

    const year = ref(curYear);
    const period = ref(curPeriod);

    const search = () => {
      reportMonth(store, year.value.getFullYear(), period.value);
    };

    return {
      year,
      period,
      periods: Constant.periods,
      search,
      disabledDate,
    };
  },
};
</script>
