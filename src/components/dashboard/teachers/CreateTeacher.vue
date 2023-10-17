<template>
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
          <el-form-item label="Quyền" prop="role">
            <el-select v-model="form.role" style="width: 100%" placeholder=" ">
              <el-option
                v-for="item in roles"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="Ảnh đại diện">
            <div style="display: flex; align-items: center">
              <el-upload
                v-model:file-list="fileList"
                class="upload-demo"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :limit="3"
                :on-exceed="handleExceed"
              >
                <el-button type="primary">Click to upload</el-button>
              </el-upload>
            </div>
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
          <el-form-item label="Mật khẩu" prop="password">
            <el-input
              v-model="form.password"
              type="password"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="row" justify="space-between">
        <el-col :span="11"
          ><el-form-item label="Tên" prop="name">
            <el-input v-model="form.name" type="text" style="width: 100%" />
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
        <el-col :span="11">
          <el-form-item label="Địa chỉ">
            <el-input v-model="form.address" type="text" style="width: 100%" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="row" justify="space-between">
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
      <el-button @click="goBack" color="#00CE68">Trở lại</el-button>
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
// eslint-disable-next-line no-unused-vars
import Constant from '@/const/const';

const userService = factoryService.get('users');

export default {
  setup() {
    const router = useRouter();

    const ruleFormRef = ref();
    const form = reactive({
      role: '',
      email: '',
      password: '',
      name: '',
      birthday: '',
      gender: '',
      address: '',
      phone: '',
    });

    const rules = reactive({
      role: [
        {
          required: true,
          message: 'Quyền không được để trống',
          trigger: 'blur',
        },
      ],
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
      password: [
        {
          required: true,
          message: 'Mật khẩu không được để trống',
          trigger: 'blur',
        },
        {
          min: 8,
          message: 'Mật khẩu phải có ít nhất 8 kí tự',
          trigger: 'blur',
        },
        {
          validator: (rule, value, callback) => {
            const regex = /^(?=.*[a-zA-Z])(?=.*\d)/;
            const isValid = regex.test(value);

            if (!isValid) {
              callback(new Error('Mật khẩu phải có ít nhất 1 kí tự và 1 số'));
            } else {
              callback();
            }
          },
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

        form.organizationId = '64686098d2fd79714c792c07'; // fix VieFace company
        try {
          const response = await userService.createTeacher(form);

          if (response.status !== 201) throw new Error('Có lỗi xảy ra');

          ElMessage({
            message: 'Tạo thành công!',
            type: 'success',
          });

          setTimeout(() => goBack(), 3000);
        } catch (err) {
          ElMessage.error(err.response.data.body.message || err.message);
        }
      });
    };
    return {
      form,
      roles: Constant.roles,
      genders: Constant.genders,
      rules,
      ruleFormRef,
      DatePickershortcuts,
      disabledDate,
      goBack,
      submitForm,
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
