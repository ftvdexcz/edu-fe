<template>
  <el-table
    :data="this.$store.getters['users/getUsers']"
    style="width: 100%"
    :stripe="true"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" min-width="90" align="center" />
    <el-table-column
      prop="id"
      label="Mã giáo viên"
      align="center"
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
      :formatter="fakeMajor"
    />
    <el-table-column
      label="Quyền"
      min-width="180"
      header-align="center"
      align="center"
      prop="role"
      :formatter="convertRole"
    />

    <el-table-column
      label="Hành động"
      min-width="120"
      header-align="center"
      align="center"
    >
      <template #default="scopedSlots">
        <div>
          <el-button @click="deleteUser(scopedSlots.row.id)" type="danger"
            >Xóa</el-button
          >
        </div>
      </template>
    </el-table-column>
  </el-table>
  <div class="pagination-actions">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="this.$store.getters['users/getTotalPages']"
      :page-size="this.$store.getters['users/getLimit']"
      @current-change="handlePageChange"
    />
  </div>
</template>

<script>
import { ElMessage, ElTable, ElMessageBox } from 'element-plus';
import { CircleCheck, Delete } from '@element-plus/icons-vue';
import helpers from '@/utils/helpers';
import factoryService from '@/services/factory.service';
import { markRaw } from 'vue';
import { useStore } from 'vuex';

const userService = factoryService.get('users');

export default {
  components: {
    ElTable,
  },
  setup() {
    const store = useStore();

    (async () => {
      try {
        await store.dispatch('users/listTeachersByRole', {
          page: 1,
          limit: 10,
          role: store.getters['users/getRoleFilter'],
        });
      } catch (err) {
        ElMessage.error(err);
      }
    })();

    const convertRole = (row, column, cellValue) => {
      return helpers.convertRole(cellValue);
    };

    const fakeMajor = () => {
      return 'CNTT';
    };

    const deleteUser = async (userId) => {
      try {
        await ElMessageBox.confirm('Xóa người dùng ?', {
          confirmButtonText: 'Xóa',
          cancelButtonText: 'Hủy',
          type: 'warning',
          icon: markRaw(Delete),

          cancelButtonClass: 'custom-close-button',
        });

        const response = await userService.deleteTeacher(userId);

        if (response.status !== 200) throw new Error('Có lỗi xảy ra');

        store.commit('users/deleteUserById', userId);

        ElMessage({
          message: 'Xóa thành công!',
          type: 'success',
        });
      } catch (err) {
        console.log(err);
        if (err !== 'cancel')
          ElMessage.error(err.response.data.body.message || err.message);
      }
    };

    const handlePageChange = (val) => {
      (async () => {
        try {
          await store.dispatch('users/listTeachersByRole', {
            page: val,
            limit: 10,
            role: store.getters['users/getRoleFilter'],
            name: store.getters['users/getNameFilter'],
          });
        } catch (err) {
          ElMessage.error(err);
        }
      })();
    };

    return {
      CircleCheck,
      convertRole,
      fakeMajor,
      deleteUser,
      handlePageChange,
    };
  },
};
</script>

<style scoped>
.permission {
  line-height: 1;
}
</style>
