<template>
  <el-table
    :data="this.$store.getters['reportHistory/getHistory']"
    style="width: 100%"
    :stripe="true"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" min-width="90" align="center" />
    <el-table-column
      prop="user._id"
      label="Mã"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="user.name"
      label="Họ tên"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="time"
      label="Ngày"
      min-width="180"
      header-align="center"
      :formatter="formatDate"
      align="center"
    />
    <el-table-column
      prop="time"
      label="Thời gian"
      :formatter="formatTime"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="camera.name"
      label="camera"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      min-width="100"
      label="Ảnh"
      prop="image"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div
          style="display: flex; justify-content: center; align-items: center"
        >
          <img
            :src="scope.row.images[0].image"
            alt="image"
            style="width: 60px; height: 60px"
          />
        </div>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination-actions">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="this.$store.getters['reportHistory/getTotalPages']"
      :page-size="this.$store.getters['reportHistory/getLimit']"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script>
import { ElTable, ElMessage } from 'element-plus';
import helpers from '@/utils/helpers';
import { useStore } from 'vuex';

export default {
  components: {
    ElTable,
  },
  setup() {
    const store = useStore();

    const formatDate = (row, column, cellValue) => {
      return helpers.formatDate(cellValue);
    };
    const formatTime = (row, column, cellValue) => {
      return helpers.formatTime(cellValue);
    };

    const handlePageChange = (val) => {
      (async () => {
        try {
          await store.dispatch('reportHistory/reportHistory', {
            page: val,
            limit: 10,
            name: store.getters['reportHistory/getNameFilter'],
            timeTo: store.getters['reportHistory/getTimeToFilter'],
            timeFrom: store.getters['reportHistory/getTimeFromFilter'],
          });
        } catch (err) {
          ElMessage.error(err);
        }
      })();
    };

    return {
      formatDate,
      formatTime,
      handlePageChange,
    };
  },
};
</script>

<style scoped></style>
