<template>
  <el-table
    :data="this.$store.state.leaveRegistrationData"
    style="width: 100%"
    :stripe="true"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" min-width="90" align="center" />
    <el-table-column
      prop="date"
      label="Ngày"
      min-width="120"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="info"
      label="Thông tin chi tiết"
      min-width="180"
      header-align="center"
    />
    <el-table-column
      prop="type"
      label="Loại"
      min-width="120"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="status"
      label="Trạng thái"
      min-width="120"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="approver"
      label="Người duyệt"
      min-width="120"
      header-align="center"
      align="center"
    />
  </el-table>
  <div class="pagination-actions">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="30"
      :page-size="10"
    />
  </div>
</template>

<script>
import { ElTable, ElPagination } from 'element-plus';

export default {
  components: {
    ElTable,
    ElPagination,
  },
};
</script>
