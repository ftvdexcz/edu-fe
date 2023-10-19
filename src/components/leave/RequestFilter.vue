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
        <label for="week">Tuần</label>
        <el-date-picker
          id="week"
          v-model="week"
          type="week"
          format="[Tuần] ww"
          placeholder="Chọn tuần"
        />
      </div>
    </template>

    <template #actions>
      <el-button @click="search" color="#00CE68">Tìm kiếm</el-button>
      <el-button color="#308EE0">Xuất file</el-button>
    </template>
  </report-filter>
</template>

<script>
import ReportFilter from '@/components/ui/ReportFilter.vue';
import { ElInput } from 'element-plus';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    ReportFilter,
    ElInput,
  },

  setup() {
    const store = useStore();
    const usernameInput = ref('');
    const week = ref('');

    const search = () => {
      const name = usernameInput.value ? usernameInput.value : null;
      (async () => {
        await store.dispatch('leaves/getLeaves', {
          page: 1,
          limit: 10,
          week: week.value,
          name,
        });
      })();

      store.commit('leaves/setFilter', {
        name,
        week: week.value,
      });
    };

    return {
      usernameInput,
      week,
      search,
    };
  },
};
</script>
