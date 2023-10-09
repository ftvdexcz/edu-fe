<template>
  <el-button color="#308EE0" @click="showForm">Đăng ký nghỉ</el-button>
  <el-dialog v-model="dialogVisible" title="Đăng ký nghỉ" width="40%">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Xin nghỉ">
        <el-select
          v-model="form.reason"
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
          v-model="form.info"
          type="textarea"
          style="width: 80%"
          rows="5"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="info" @click="closeForm">Hủy</el-button>
        <el-button type="primary" @click="closeForm">Đăng Ký</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref, reactive } from 'vue';
import { ElButton, ElDialog } from 'element-plus';

export default {
  components: {
    ElButton,
    ElDialog,
  },
  setup() {
    const dialogVisible = ref(false);
    const form = reactive({
      reason: '',
      date: '',
      info: '',
    });

    const reasonOption = [
      {
        label: 'Đi muộn',
        value: 1,
      },
      {
        label: 'Nghỉ ốm đau (có giấy từ bệnh viện)',
        value: 2,
      },
      {
        label: 'Nghỉ không lương',
        value: 3,
      },
      {
        label: 'Nghỉ phép năm',
        value: 4,
      },
      {
        label:
          'Nghỉ chế độ (nhân sự cưới, con cưới, người thân mất, sự kiện trường)',
        value: 4,
      },
      {
        label: 'Về sớm',
        value: 5,
      },
    ];

    function showForm() {
      dialogVisible.value = true;
    }
    function closeForm() {
      dialogVisible.value = false;
    }

    return {
      dialogVisible,
      form,
      reasonOption,

      showForm,
      closeForm,
    };
  },
};
</script>

<style scoped></style>
