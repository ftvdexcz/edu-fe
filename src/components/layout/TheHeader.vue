<template>
  <header>
    <nav>
      <div class="navbar-brand">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="brand" />
        </router-link>
      </div>

      <el-dropdown ref="dropdown" trigger="click" size="large">
        <div class="el-dropdown-link">
          <div class="navbar-user" @click="showDropDown">
            <span>Xin chào, </span><span>{{ username }}</span>
            <span class="navbar-dropdown">
              <ChevronDownIcon />
            </span>
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toProfile"
              >Quản lý tài khoản</el-dropdown-item
            >
            <el-dropdown-item @click="logout">Đăng xuất</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </nav>
  </header>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  components: {
    ChevronDownIcon,
  },
  setup() {
    const dropdown = ref(null);
    const router = useRouter();
    const store = useStore();

    const user = store.getters['auth/getCurrentUser'].user;
    const username = ref(user.name);

    const showClick = () => {
      if (!dropdown.value) return;
      dropdown.value.handleOpen();
    };

    const logout = () => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('tokens');

      store.commit('auth/logout');
      router.push('/login');
    };

    const toProfile = () => {
      router.push('/profile');
    };

    return {
      dropdown,
      logout,
      toProfile,
      username,

      showClick,
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(120deg, #00e4d0, #5983e8);
}
.navbar-brand {
  min-width: 24rem;
  background-color: white;
}

img {
  height: 6.4rem;
}

.navbar-brand a {
  display: block;
  margin: 0 auto;
  width: fit-content;
}

.navbar-user {
  padding: 0 5.6rem;
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
}

svg {
  height: 1.7rem;
  width: 1.7rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.navbar-dropdown {
  margin-left: 2.4rem;
  line-height: 1;
  position: relative;
}
</style>
