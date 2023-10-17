<template>
  <div class="wrapper-login">
    <div class="form-login">
      <div class="logo-wrapper">
        <img class="logo" src="../assets/logo.png" />
      </div>
      <div class="form-wrapper">
        <el-form :model="form" size="large">
          <el-form-item>
            <el-input v-model="form.email" placeholder="Email" />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="form.password"
              type="password"
              placeholder="Mật khẩu"
            />
          </el-form-item>
        </el-form>
        <el-button
          @click="login"
          color="#3E9C73"
          size="large"
          style="width: 50%; box-shadow: 0 8px 24px 0 rgba(95, 186, 233, 0.4)"
          >Đăng nhập</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import factoryService from '@/services/factory.service';
import { ElMessage } from 'element-plus';

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import tokensUtils from '@/utils/tokens';

const authService = factoryService.get('auth');

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const form = reactive({
      email: '',
      password: '',
    });

    const login = async () => {
      try {
        const response = await authService.login(form);

        if (response.status !== 200) {
          throw new Error('Đăng nhập thất bại');
        }

        const currentUser = {
          user: response.data.user,
          tokens: response.data.tokens,
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // thành công, login với admin để fake token
        const response2 = await authService.login({
          email: 'admin@vieface.com',
          password: 'Admin123',
        });

        if (response2.status !== 200) {
          throw new Error('Có lỗi xảy ra');
        }
        console.log(response2);
        console.log(response2.data.tokens);
        tokensUtils.setTokenLocalStorage(response2.data.tokens);

        store.commit('auth/setUser', {
          currentUser,
          tokens: response2.data.tokens,
        });

        router.push('/');
      } catch (err) {
        ElMessage.error(err.response.data.body.message);
      }
    };

    return {
      form,
      login,
    };
  },
};
</script>

<style>
.wrapper-login .logo {
  width: 100px;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    opacity: 1;
  }
}

.logo-wrapper {
  padding: 1.4rem 0;
}

.form-login {
  width: 450px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  padding: 4rem;
  border-radius: 1.2rem;
  text-align: center;
  animation: fade-in 2s ease-in;
}
.form-wrapper {
  margin-top: 2.4rem;
}

.wrapper-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.form-login input {
  text-align: center;
  font-size: 1.6rem;
  padding: 1.6rem 0;
  color: #0d0d0d;
}

.form-login .el-input__wrapper {
  border-radius: 4px;
}
</style>
