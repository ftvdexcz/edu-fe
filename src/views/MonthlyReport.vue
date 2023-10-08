<template>
  <div>
    <h1>Báo cáo theo tháng</h1>
    <report-filter></report-filter>
    <hr />
    <report-type-list></report-type-list>
    <report-table></report-table>
  </div>
</template>

<script>
import ReportTypeList from '@/components/report/monthly/ReportTypeList.vue';
import ReportFilter from '@/components/report/monthly/ReportFilter.vue';
import ReportTable from '@/components/report/monthly/ReportTable.vue';

export default {
  components: { ReportFilter, ReportTypeList, ReportTable },
};
</script>

<style scoped></style>
