<template>
  <report-filter>
    <template #default>
      <div class="form-controll">
        <label for="period">Kì Học</label>
        <el-select id="period" v-model="period" placeholder="Chọn kì">
          <el-option
            v-for="item in ['Kì 1', 'Kì 2', 'Kì 3']"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="form-controll">
        <label for="year">Năm</label>
        <el-date-picker id="year" v-model="monthInput" type="year" />
      </div>
    </template>

    <template #actions>
      <el-button color="#00CE68">Tìm kiếm</el-button>
      <el-button color="#308EE0">Xuất báo cáo</el-button>
    </template>
  </report-filter>
</template>

<script>
import { ElDatePicker, ElSelect, ElButton } from 'element-plus';
import { ref } from 'vue';
import ReportFilter from '../../ui/ReportFilter.vue';

export default {
  components: {
    ElDatePicker,
    ElSelect,
    ReportFilter,
    ElButton,
  },
  setup() {
    const usernameInput = ref('');
    const monthInput = ref('');
    const period = ref('');

    return {
      usernameInput,
      monthInput,
      period,
    };
  },
};
</script>
