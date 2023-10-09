<template>
  <div>
    <h1>Duyệt đăng ký nghỉ</h1>
    <request-filter></request-filter>
    <hr />

    <request-table></request-table>
  </div>
</template>

<script>
import RequestFilter from '@/components/leave/RequestFilter.vue';
import RequestTable from '@/components/leave/RequestTable.vue';

export default {
  components: {
    RequestFilter,
    RequestTable,
  },
};
</script>
