<template>
  <el-table
    :data="this.$store.state.teachers"
    style="width: 100%"
    :stripe="true"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" min-width="90" align="center" />
    <el-table-column
      prop="id"
      label="Mã giáo viên"
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
      label="Email"
      min-width="180"
      header-align="center"
      align="center"
      prop="email"
    />
    <el-table-column
      label="Khoa"
      min-width="180"
      header-align="center"
      align="center"
      prop="major"
    />
    <el-table-column
      label="Quyền"
      min-width="180"
      header-align="center"
      align="center"
      prop="role"
    />

    <el-table-column
      label="Hành động"
      min-width="120"
      header-align="center"
      align="center"
    >
      <template #default>
        <div>
          <el-button type="danger">Xóa</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ElTable } from 'element-plus';
import { CircleCheck } from '@element-plus/icons-vue';

export default {
  components: {
    ElTable,
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
