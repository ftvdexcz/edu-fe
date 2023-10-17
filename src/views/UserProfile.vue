<template>
  <h1>Quản lý tài khoản</h1>
  <div class="wrapper-form">
    <el-form
      ref="ruleFormRef"
      :model="form"
      label-width="auto"
      label-position="left"
      :rules="rules"
    >
      <el-row class="row" justify="space-between">
        <el-col :span="11">
          <el-form-item label="Quyền">
            <el-input
              disabled
              type="input"
              style="width: 100%"
              :placeholder="convertRole(form.role)"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="row" justify="space-between">
        <el-col :span="11">
          <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" type="input" style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="Ngày sinh" prop="birthday">
            <el-col>
              <el-date-picker
                style="width: 100%"
                v-model="form.birthday"
                type="date"
                placeholder="Chọn ngày"
                format="DD/MM/YYYY"
                :shortcuts="DatePickershortcuts"
                :disabled-date="disabledDate"
              />
            </el-col> </el-form-item
        ></el-col>
      </el-row>
      <el-row class="row" justify="space-between">
        <el-col :span="11"
          ><el-form-item label="Tên" prop="name">
            <el-input v-model="form.name" type="text" style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="Địa chỉ">
            <el-input v-model="form.address" type="text" style="width: 100%" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="row" justify="space-between">
        <el-col :span="11">
          <el-form-item label="Giới tính" prop="gender">
            <el-select
              v-model="form.gender"
              style="width: 100%"
              placeholder=" "
            >
              <el-option
                v-for="item in genders"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="11"
          ><el-form-item label="Số điện thoại">
            <el-input
              v-model="form.phone"
              type="text"
              style="width: 100%"
            /> </el-form-item
        ></el-col>
      </el-row>
    </el-form>
    <div class="form-actions">
      <el-button @click="submitForm(ruleFormRef)" color="#308EE0"
        >Lưu</el-button
      >
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import factoryService from '@/services/factory.service';
import { DatePickershortcuts } from '@/utils/elementPlusCpn';
import { useStore } from 'vuex';
import helpers from '@/utils/helpers';

const userService = factoryService.get('users');

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const currentUser = store.getters['auth/getCurrentUser'];
    const user = currentUser.user;

    const convertRole = helpers.convertRole;

    const ruleFormRef = ref();
    const form = reactive({
      role: user.role,
      email: user.email,
      name: user.name,
      birthday: user.birthday,
      gender: user.gender,
      address: user.address,
      phone: user.phone,
    });

    const rules = reactive({
      email: [
        {
          required: true,
          message: 'Email không được để trống',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Email không hợp lệ',
          trigger: 'blur',
        },
      ],
      name: [
        {
          required: true,
          message: 'Tên không được để trống',
          trigger: 'blur',
        },
      ],
      gender: [
        {
          required: true,
          message: 'Giới tính không được để trống',
          trigger: 'blur',
        },
      ],
      birthday: [
        {
          required: true,
          message: 'Ngày sinh không được để trống',
          trigger: 'blur',
        },
      ],
    });

    const genders = [
      {
        label: 'Nam',
        value: 'male',
      },
      {
        label: 'Nữ',
        value: 'female',
      },
      {
        label: 'Khác',
        value: 'other',
      },
    ];

    const disabledDate = (time) => {
      return time.getTime() > Date.now();
    };

    const goBack = () => {
      router.back();
    };

    const submitForm = async (formEl) => {
      if (!formEl) return;
      // eslint-disable-next-line no-unused-vars
      const valid = await formEl.validate(async (valid, fields) => {
        if (!valid) {
          return;
        }
        try {
          const response = await userService.updateTeacher(user.id, form);

          if (response.status !== 200) throw new Error('Có lỗi xảy ra');

          ElMessage({
            message: 'Cập nhật thành công!',
            type: 'success',
          });

          currentUser.user = response.data;
          store.commit('auth/updateUser', currentUser);
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } catch (err) {
          ElMessage.error(err.response.data.body.message);
        }
      });
    };
    return {
      form,
      genders,
      rules,
      ruleFormRef,
      DatePickershortcuts,
      disabledDate,
      goBack,
      submitForm,
      convertRole,
    };
  },
};
</script>

<style scoped>
.wrapper-form {
  margin-top: 2.4rem;
}

.row {
  height: 60px;
  padding: 1.2rem;
}

.form-actions {
  margin-top: 1.2rem;
}
</style>
