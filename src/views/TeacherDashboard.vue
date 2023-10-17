<template>
  <div>
    <h1>Quản lý giáo viên</h1>
    <div v-if="!isCreateView">
      <teacher-filter></teacher-filter>
      <hr />
      <teacher-table></teacher-table>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TeacherFilter from '@/components/dashboard/teachers/TeacherFilter.vue';
import TeacherTable from '@/components/dashboard/teachers/TeacherTable.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
  setup() {
    const route = useRoute();

    const isCreateView = computed(function () {
      return route.fullPath === '/teachers/new';
    });

    return {
      isCreateView,
    };
  },
  components: {
    TeacherFilter,
    TeacherTable,
  },
};
</script>
