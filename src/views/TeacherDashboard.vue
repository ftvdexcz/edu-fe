<template>
  <div>
    <h1>Quản lý giáo viên</h1>
    <teacher-filter></teacher-filter>
    <hr />

    <teacher-table></teacher-table>
  </div>
</template>

<script>
import TeacherFilter from '@/components/dashboard/teachers/TeacherFilter.vue';
import TeacherTable from '@/components/dashboard/teachers/TeacherTable.vue';

export default {
  components: {
    TeacherFilter,
    TeacherTable,
  },
};
</script>
