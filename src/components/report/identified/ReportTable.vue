<template>
  <el-table
    :data="this.$store.state.reportIdentifiedData"
    style="width: 100%"
    :stripe="true"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" min-width="90" align="center" />
    <el-table-column
      prop="id"
      label="Mã"
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
      prop="date"
      label="Ngày"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="time"
      label="Thời gian"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="camera"
      label="Camera"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      min-width="180"
      label="Ảnh"
      prop="image"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        {{ scope.row.image }}
      </template>
    </el-table-column>
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
