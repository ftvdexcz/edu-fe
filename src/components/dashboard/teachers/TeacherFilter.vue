<template>
  <report-filter>
    <template #default>
      <div class="form-controll">
        <label for="name">Tên</label>
        <el-input
          id="name"
          v-model="usernameInput"
          style="width: 50%"
        ></el-input>
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
    </template>

    <template #actions>
      <el-button color="#00CE68">Tìm kiếm</el-button>
      <el-button color="#00CE68">Tạo mới</el-button>
      <el-button color="#308EE0">Xuất file</el-button>
    </template>
  </report-filter>
</template>

<script>
import ReportFilter from '@/components/ui/ReportFilter.vue';
import { ElInput } from 'element-plus';
import { ref } from 'vue';

export default {
  components: {
    ReportFilter,
    ElInput,
  },

  setup() {
    const usernameInput = ref('');
    const major = ref('');

    return {
      usernameInput,
      major,
    };
  },
};
</script>
