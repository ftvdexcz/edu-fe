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
      prop="user.name"
      label="Tên GV"
      min-width="150"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="type"
      label="Lý do"
      :formatter="formatterType"
      min-width="250"
      header-align="center"
    />
    <el-table-column
      prop="reason"
      label="Chi tiết"
      min-width="250"
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
      label="Hành động"
      min-width="120"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div v-if="scope.row.status === 1">
          <el-button class="status-tag" color="#00ce68" size="small"
            >Đã Duyệt</el-button
          >
          <p class="approver">({{ scope.row.approver.name }})</p>
        </div>
        <div v-else>
          <el-button
            class="status-tag"
            color="#f56c6c"
            size="small"
            @click="approveRequest(scope.row.id)"
            >Duyệt</el-button
          >
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
import { ElTable, ElPagination, ElMessage } from 'element-plus';
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

    (async () => {
      await store.dispatch('leaves/getLeaves', {
        page: 1,
        limit: 10,
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
          week: store.getters['leaves/getWeekFilter'],
          name: store.getters['leaves/getNameFilter'],
        });
      })();
    };

    const approveRequest = (id) => {
      const user = store.getters['auth/getCurrentUser'].user;

      const payload = {
        id,
        name: user.name,
        userId: user.id,
      };
      (async () => {
        await store.dispatch('leaves/approveRequest', payload);

        ElMessage({
          message: 'Cập nhật thành công!',
          type: 'success',
        });
      })();
    };

    return {
      formatterType,
      formatterCreatedAt,
      handlePageChange,
      approveRequest,
    };
  },
};
</script>

<style scoped>
.approver {
  margin: 0.6rem 0;
}

.status-tag {
  width: 6.6rem;
}
</style>
