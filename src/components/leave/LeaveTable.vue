<template>
  <el-table
    :data="this.$store.getters['leaves/getData']"
    style="width: 100%"
    :stripe="true"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" width="90" align="center" />
    <el-table-column
      prop="type"
      label="Lý do"
      :formatter="formatterType"
      min-width="300"
      header-align="center"
    />
    <el-table-column
      prop="reason"
      label="Chi tiết"
      min-width="300"
      header-align="center"
    />
    <el-table-column
      prop="date"
      label="Ngày nghỉ"
      width="120"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="created_at"
      label="Ngày tạo"
      width="120"
      header-align="center"
      align="center"
      :formatter="formatterCreatedAt"
    />
    <el-table-column
      label="Trạng thái"
      min-width="120"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div v-if="scope.row.status === 1">
          <el-tag class="ml-2" effect="dark" type="success">Đã duyệt</el-tag>
          <p class="approver">({{ scope.row.approver.name }})</p>
        </div>
        <div v-else>
          <el-tag class="ml-2" effect="dark" type="danger">Chưa duyệt</el-tag>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination-actions">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="this.$store.getters['leaves/getTotals']"
      :page-size="this.$store.getters['leaves/getLimit']"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script>
import { ElTable, ElPagination } from 'element-plus';
import { useStore } from 'vuex';
import Constants from '@/const/const';
import helpers from '@/utils/helpers';

export default {
  components: {
    ElTable,
    ElPagination,
  },
  setup() {
    const store = useStore();
    const user = store.getters['auth/getCurrentUser'].user;

    (async () => {
      await store.dispatch('leaves/getLeaves', {
        page: 1,
        limit: 10,
        userId: user.id,
      });
    })();

    const formatterType = (row, column, cellValue) => {
      return Constants.reasonOptions.find((obj) => obj.value === cellValue)
        .label;
    };

    const formatterCreatedAt = (row, column, cellValue) => {
      return helpers.timestampToDateString(cellValue);
    };

    const handlePageChange = (val) => {
      (async () => {
        await store.dispatch('leaves/getLeaves', {
          page: val,
          limit: 10,
          userId: user.id,
        });
      })();
    };

    return { formatterType, formatterCreatedAt, handlePageChange };
  },
};
</script>
