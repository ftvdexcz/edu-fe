<template>
  <el-button color="#308EE0" @click="showForm">Đăng ký nghỉ</el-button>
  <el-dialog v-model="dialogVisible" title="Đăng ký nghỉ" width="40%">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Xin nghỉ">
        <el-select
          v-model="form.type"
          placeholder="Chọn lý do"
          style="width: 80%"
        >
          <el-option
            v-for="item in reasonOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Ngày nghỉ">
        <el-col>
          <el-date-picker
            style="width: 80%"
            v-model="form.date"
            type="date"
            placeholder="Chọn ngày"
            format="DD/MM/YYYY"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Diễn giải">
        <el-input
          v-model="form.reason"
          type="textarea"
          style="width: 80%"
          rows="5"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="info" @click="closeForm">Hủy</el-button>
        <el-button type="primary" @click="submitForm">Đăng Ký</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref, reactive } from 'vue';
import { ElButton, ElDialog, ElMessage } from 'element-plus';
import Constants from '@/const/const';
import leaveService from '@/services/leave.service';
import { useStore } from 'vuex';
import helpers from '@/utils/helpers';

export default {
  components: {
    ElButton,
    ElDialog,
  },
  setup() {
    const store = useStore();
    const dialogVisible = ref(false);
    const form = reactive({
      reason: '',
      date: '',
      type: '',
    });

    const showForm = () => {
      dialogVisible.value = true;
    };
    const closeForm = () => {
      dialogVisible.value = false;
    };
    const submitForm = () => {
      const user = store.getters['auth/getCurrentUser'].user;
      const payload = {
        type: form.type,
        reason: form.reason,
        date: helpers.formatDateTz(form.date),
        user: {
          name: user.name,
          id: user.id,
        },
      };

      (async () => {
        try {
          await leaveService.createLeaveReq(payload);

          ElMessage({
            message: 'Đăng ký thành công!',
            type: 'success',
          });

          setTimeout(() => {
            dialogVisible.value = false;
          }, 2000);
        } catch (e) {
          ElMessage.error(e);
        }
      })();
    };

    return {
      dialogVisible,
      form,
      reasonOption: Constants.reasonOptions,

      showForm,
      closeForm,
      submitForm,
    };
  },
};
</script>

<style scoped></style>
