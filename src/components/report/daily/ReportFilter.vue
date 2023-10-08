<template>
  <report-filter>
    <template #default>
      <div class="form-controll">
        <label for="name">Tên</label>
        <el-input v-model="usernameInput" style="width: 50%"></el-input>
      </div>
      <div class="form-controll">
        <label for="class">Lớp</label>
        <el-select id="class" v-model="period" placeholder="Chọn lớp">
          <el-option v-for="item in []" :key="item" />
        </el-select>
      </div>
      <div class="form-controll">
        <label for="week">Ngày</label>
        <el-date-picker
          v-model="daily"
          type="date"
          placeholder="Chọn ngày"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
          format="DD/MM/YYYY"
        />
      </div>
      <div>
        <el-radio-group v-model="summary">
          <el-radio-button :label="'Có mặt: ' + summaryObj.present" />
          <el-radio-button :label="'Vắng: ' + summaryObj.absent" />
          <el-radio-button :label="'Có phép: ' + summaryObj.permission" />
          <el-radio-button
            :label="'Không phép: ' + summaryObj.withoutPermission"
          />
        </el-radio-group>
      </div>
    </template>

    <template #actions>
      <el-button @click="search" color="#00CE68">Tìm kiếm</el-button>
      <el-button @click="test" color="#308EE0">Xuất báo cáo</el-button>
    </template>
  </report-filter>
</template>

<script>
import ReportFilter from '@/components/ui/ReportFilter.vue';
import { ElInput, ElDatePicker } from 'element-plus';
import { reactive, ref } from 'vue';

export default {
  components: {
    ReportFilter,
    ElDatePicker,
    ElInput,
  },

  setup() {
    const summaryObj = reactive({
      present: 42,
      absent: 0,
      permission: 0,
      withoutPermission: 0,
    });

    const usernameInput = ref('');
    const daily = ref('');
    const summary = ref(`Có mặt: ${summaryObj.present}`);

    const shortcuts = [
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

    const disabledDate = (time) => {
      return time.getTime() > Date.now();
    };

    function search() {
      console.log(+summary.value.split(':')[1]); // giá trị vắng, có phép, k phép ...
    }

    // Note (todo): khi fetch lại api nhớ phải set lại value của summary với giá trị mới
    function test() {
      summaryObj.present = 35;
      summary.value = `Có mặt: ${summaryObj.present}`;
    }

    return {
      usernameInput,
      daily,
      shortcuts,
      disabledDate,
      summary,
      summaryObj,
      test,
      search,
    };
  },
};
</script>
