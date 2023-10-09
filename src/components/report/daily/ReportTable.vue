<template>
  <el-table
    :data="this.$store.state.reportDailyData"
    style="width: 100%"
    :stripe="true"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" min-width="90" align="center" />
    <el-table-column
      prop="id"
      label="Mã sinh viên"
      min-width="180"
      header-align="center"
    />
    <el-table-column
      prop="name"
      label="Họ tên"
      min-width="180"
      header-align="center"
    />
    <el-table-column
      label="Có phép"
      min-width="90"
      header-align="center"
      align="center"
      prop="permission"
    >
      <template #default="scope">
        <div class="permission" v-if="scope.row.permission === 1">
          <el-icon color="#308EE0" :size="16"><CircleCheck /></el-icon>
        </div>
        <div v-else></div>
      </template>
    </el-table-column>
    <el-table-column
      label="Không phép"
      min-width="90"
      header-align="center"
      align="center"
      prop="permission"
    >
      <template #default="scope">
        <div class="permission" v-if="scope.row.permission === 0">
          <el-icon color="#308EE0" :size="16"><CircleCheck /></el-icon>
        </div>
        <div v-else></div>
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="Trạng thái"
      min-width="120"
      header-align="center"
      align="center"
    />
  </el-table>
</template>

<script>
import { ElTable, ElIcon } from 'element-plus';
import { CircleCheck } from '@element-plus/icons-vue';

export default {
  components: {
    ElTable,
    ElIcon,
  },
  setup() {
    return { CircleCheck };
  },
};
</script>

<style scoped>
.permission {
  line-height: 1;
}
</style>
