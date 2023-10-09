<template>
  <el-table
    :data="this.$store.state.leaveRequests"
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
      prop="teacherId"
      label="Mã GV"
      min-width="120"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="name"
      label="Giáo viên"
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
      label="Hành động"
      min-width="120"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div v-if="scope.row.status === 1">
          <p style="color: #00ce68">Đã duyệt</p>
          <p>({{ scope.row.approver }})</p>
        </div>
        <div v-else>
          <el-button type="danger">Duyệt</el-button>
        </div>
      </template>
    </el-table-column>
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
