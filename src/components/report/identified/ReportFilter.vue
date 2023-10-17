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
          v-model="daily"
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
          v-model="daily"
          type="date"
          placeholder="Chọn ngày"
          :disabled-date="disabledDate"
          :shortcuts="DatePickershortcuts"
          format="DD/MM/YYYY"
        />
      </div>
    </template>

    <template #actions>
      <el-button color="#00CE68">Tìm kiếm</el-button>
      <el-button color="#308EE0">Xuất báo cáo</el-button>
    </template>
  </report-filter>
</template>

<script>
import { ElDatePicker, ElSelect } from 'element-plus';
import { ref } from 'vue';
import ReportFilter from '../../ui/ReportFilter.vue';
import { DatePickershortcuts } from '@/utils/elementPlusCpn';

export default {
  components: {
    ElDatePicker,
    ElSelect,
    ReportFilter,
  },
  setup() {
    const usernameInput = ref('');
    const monthInput = ref('');
    const period = ref('');
    const major = ref('');

    const disabledDate = (time) => {
      return time.getTime() > Date.now();
    };

    return {
      usernameInput,
      monthInput,
      period,
      major,
      DatePickershortcuts,

      disabledDate,
    };
  },
};
</script>
