<template>
  <el-table
    :data="this.$store.state.reportMonthlyData"
    style="width: 100%"
    :stripe="true"
    :cell-style="
      function ({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 1 && columnIndex === 1) {
          return {
            backgroundColor: '#fbe7c6',
          };
        }
      }
    "
    size="large"
  >
    <el-table-column type="index" label="STT" width="90" align="center" />
    <el-table-column prop="date" label="Ngày" min-width="180" />
    <el-table-column prop="time" label="Thời gian" min-width="180" />
    <el-table-column prop="status" min-width="180" label="Trạng thái" />
  </el-table>
</template>

<script>
import { ElTable } from 'element-plus';

export default {
  components: {
    ElTable,
  },
};
</script>

<style scoped></style>
