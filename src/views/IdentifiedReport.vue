<template>
  <div>
    <h1>Lịch sử nhận diện</h1>
    <report-filter></report-filter>
    <hr />
    <report-table></report-table>
  </div>
</template>

<script>
import ReportFilter from '@/components/report/identified/ReportFilter.vue';
import ReportTable from '@/components/report/identified/ReportTable.vue';

export default {
  components: {
    ReportFilter,
    ReportTable,
  },
};
</script>

<style scoped></style>
