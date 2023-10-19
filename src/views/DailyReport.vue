<template>
  <div>
    <h1>Báo cáo theo ngày</h1>
    <report-filter></report-filter>
    <hr />
    <report-type-list></report-type-list>
    <report-table></report-table>
  </div>
</template>

<script>
import ReportFilter from '@/components/report/daily/ReportFilter.vue';
import ReportTable from '@/components/report/daily/ReportTable.vue';
import ReportTypeList from '@/components/report/monthly/ReportTypeList.vue';

export default {
  components: {
    ReportTypeList,
    ReportFilter,
    ReportTable,
  },
};
</script>
