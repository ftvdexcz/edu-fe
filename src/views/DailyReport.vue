<template>
  <div>
    <h1>Báo cáo theo ngày</h1>
    <report-filter></report-filter>
    <hr />

    <report-table></report-table>
  </div>
</template>

<script>
import ReportFilter from '@/components/report/daily/ReportFilter.vue';
import ReportTable from '@/components/report/daily/ReportTable.vue';

export default {
  components: {
    ReportFilter,
    ReportTable,
  },
};
</script>
