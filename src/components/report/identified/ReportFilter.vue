<template>
  <report-filter>
    <template #default>
      <div class="form-controll">
        <label for="name">Tên</label>
        <el-input v-model="usernameInput" style="width: 50%"></el-input>
      </div>
      <div class="form-controll">
        <label for="major">Khoa</label>
        <el-select id="major" v-model="major" placeholder="Chọn khoa">
          <el-option
            v-for="item in ['CNTT', 'ĐTVT', 'ATTT']"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="form-controll">
        <label for="week">Ngày bắt đầu</label>
        <el-date-picker
          v-model="from"
          type="date"
          placeholder="Chọn ngày"
          :disabled-date="disabledDate"
          :shortcuts="DatePickershortcuts"
          format="DD/MM/YYYY"
        />
      </div>
      <div class="form-controll">
        <label for="week">Ngày kết thúc</label>
        <el-date-picker
          v-model="to"
          type="date"
          placeholder="Chọn ngày"
          :disabled-date="disabledDate"
          :shortcuts="DatePickershortcuts"
          format="DD/MM/YYYY"
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
import { ElDatePicker, ElMessage, ElSelect } from 'element-plus';
import { ref } from 'vue';
import ReportFilter from '../../ui/ReportFilter.vue';
import { DatePickershortcuts } from '@/utils/elementPlusCpn';

import { useStore } from 'vuex';
import helpers from '@/utils/helpers';

export default {
  components: {
    ElDatePicker,
    ElSelect,
    ReportFilter,
  },
  setup() {
    const usernameInput = ref('');
    const to = ref('');
    const from = ref('');
    const major = ref('');

    const store = useStore();

    const disabledDate = (time) => {
      return time.getTime() > Date.now();
    };

    const search = () => {
      const timeFrom = from.value
        ? helpers.formatDateTz(from.value).split('-').reverse().join('-')
        : '';
      const timeTo = to.value
        ? helpers.formatDateTz(to.value).split('-').reverse().join('-')
        : '';

      console.log(timeFrom, timeTo);

      store.commit('reportHistory/setFilter', {
        name: usernameInput.value,
        timeFrom,
        timeTo,
      });

      (async () => {
        try {
          await store.dispatch('reportHistory/reportHistory', {
            page: 1,
            limit: 10,
            name: store.getters['reportHistory/getNameFilter'],
            timeTo: store.getters['reportHistory/getTimeToFilter'],
            timeFrom: store.getters['reportHistory/getTimeFromFilter'],
          });
        } catch (err) {
          ElMessage.error(err);
        }
      })();
    };

    (async () => {
      try {
        store.dispatch(
          'reportHistory/reportHistory',
          (store,
          {
            page: 1,
            limit: 10,
            timeTo: null,
            timeFrom: null,
            name: null,
          })
        );
      } catch (err) {
        ElMessage.error(err);
      }
    })();

    return {
      usernameInput,
      from,
      to,
      major,
      DatePickershortcuts,
      search,
      disabledDate,
    };
  },
};
</script>
