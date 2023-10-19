<template>
  <report-filter>
    <template #default>
      <div class="form-controll">
        <label for="name">Tên</label>
        <el-input v-model="usernameInput" style="width: 50%"></el-input>
      </div>
      <div class="form-controll">
        <label for="class">Lớp</label>
        <el-select id="class" v-model="cls" placeholder="Chọn lớp">
          <el-option v-for="item in []" :key="item" />
        </el-select>
      </div>
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
      <!-- <div>
        <el-radio-group v-model="summary">
          <el-radio-button :label="'Có mặt: ' + summaryObj.present" />
          <el-radio-button :label="'Vắng: ' + summaryObj.absent" />
          <el-radio-button :label="'Có phép: ' + summaryObj.permission" />
          <el-radio-button
            :label="'Không phép: ' + summaryObj.withoutPermission"
          />
        </el-radio-group>
      </div> -->
    </template>

    <template #actions>
      <el-button @click="search" color="#00CE68">Tìm kiếm</el-button>
      <el-button color="#308EE0">Xuất báo cáo</el-button>
    </template>
  </report-filter>
</template>

<script>
import ReportFilter from '@/components/ui/ReportFilter.vue';
import { ElInput, ElSelect, ElMessage } from 'element-plus';
import { ref } from 'vue';
import Constant from '@/const/const';
import { DatePickershortcuts } from '@/utils/elementPlusCpn';
import factoryService from '@/services/factory.service';
import helpers from '@/utils/helpers';
import { useStore } from 'vuex';

const historyService = factoryService.get('histories');
const userService = factoryService.get('users');

const reportDaily = async (store, curYear, curPeriod, name) => {
  const days = helpers.generateDays(curYear, curPeriod);

  store.commit('reportDaily/setTotalDays', days);

  try {
    const response = await historyService.reportDaily({
      timeFrom: days[0].day.split('-').reverse().join('-'), // dd-MM-yyyy -> yyyy-MM-dd
      timeTo: days.at(-1).day.split('-').reverse().join('-'),
      name,
    });

    if (response.status !== 200) throw new Error('Có lỗi xảy ra');

    const histories = response.data.results;

    console.log(histories);

    const response2 = await userService.listTeachersByRole(
      1,
      100000,
      'USER',
      name
    );

    if (response2.status !== 200) throw new Error('Có lỗi xảy ra');
    const students = response2.data.results;

    const data = students.map((s) => {
      const obj = {
        userName: s.name,
        userId: s.id,
        reports: [], // {status: null, leavePermission: 0, checkIn: null, checkOut: null, day, shift}
      };

      obj.reports = days.map((d) => {
        const match = histories.filter(
          (h) => helpers.formatDate(h.time) === d.day && h.user._id === s.id
        );

        if (match.length > 0) {
          console.log('match');
          const { status, checkIn, checkOut } = helpers.reportIdentifiedType(
            match,
            d.shift
          );
          return {
            status,
            leavePermission: 0,
            checkIn,
            checkOut,
            day: d.day,
            shift: d.shift,
          };
        } else {
          return {
            status: 4, // nghỉ
            leavePermission: 0,
            checkIn: null,
            checkOut: null,
            day: d.day,
            shift: d.shift,
          };
        }
      });

      return obj;
    });

    console.log(data);

    store.commit('reportDaily/setData', data);

    console.log(store.getters['reportDaily/getData']);
  } catch (err) {
    console.log(err);
    ElMessage.error(err);
  }
};

export default {
  components: {
    ReportFilter,
    ElSelect,
    ElInput,
  },

  setup() {
    const store = useStore();

    const disabledDate = (time) => {
      return time.getTime() > Date.now();
    };

    const { curYear, curPeriod } = helpers.defaultReportMonthFilter();

    reportDaily(store, curYear, curPeriod, '');

    const year = ref(curYear);
    const period = ref(curPeriod);
    const usernameInput = ref('');
    const cls = ref('');

    const search = () => {
      reportDaily(
        store,
        new Date(year.value).getFullYear(),
        period.value,
        usernameInput.value
      );
    };

    return {
      usernameInput,
      year,
      period,
      periods: Constant.periods,
      DatePickershortcuts,
      cls,
      disabledDate,
      search,
    };
  },
};
</script>
