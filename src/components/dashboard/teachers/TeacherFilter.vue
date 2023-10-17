<template>
  <report-filter>
    <template #default>
      <div class="form-controll">
        <label for="name">Tên</label>
        <el-input
          id="name"
          v-model="usernameInput"
          style="width: 50%"
        ></el-input>
      </div>
      <div class="form-controll">
        <label for="major">Khoa</label>
        <el-select id="major" v-model="major" placeholder="Chọn khoa">
          <el-option
            v-for="item in ['CNTT', 'ĐTVT', 'ATTT']"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="form-controll">
        <label for="role">Quyền</label>
        <el-select id="role" v-model="role">
          <el-option
            v-for="item in roles"
            :key="item"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </template>

    <template #actions>
      <el-button color="#00CE68" @click="search">Tìm kiếm</el-button>
      <el-button tag="router-link" :to="createNewPath" color="#00CE68"
        >Tạo mới</el-button
      >
      <el-button color="#308EE0">Xuất file</el-button>
    </template>
  </report-filter>
</template>

<script>
import ReportFilter from '@/components/ui/ReportFilter.vue';
import { ElInput, ElMessage } from 'element-plus';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Constant from '@/const/const';
import { useStore } from 'vuex';

export default {
  components: {
    ReportFilter,
    ElInput,
  },

  setup() {
    const route = useRoute();
    const store = useStore();

    const usernameInput = ref('');
    const major = ref('');
    const role = ref('MANAGER');

    const search = () => {
      store.commit('users/setFilter', {
        name: usernameInput.value,
        role: role.value,
      });

      (async () => {
        try {
          await store.dispatch('users/listTeachersByRole', {
            page: 1,
            limit: 10,
            role: store.getters['users/getRoleFilter'],
            name: store.getters['users/getNameFilter'],
          });
        } catch (err) {
          ElMessage.error(err);
        }
      })();
    };

    const createNewPath = route.path + '/new';

    return {
      usernameInput,
      major,
      roles: Constant.roles,
      role,
      search,

      createNewPath,
    };
  },
};
</script>
