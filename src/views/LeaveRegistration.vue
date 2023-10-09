<template>
  <div>
    <h1>Theo dõi nghỉ</h1>
    <leave-info></leave-info>
    <leave-form></leave-form>
    <hr />
    <leave-table></leave-table>
  </div>
</template>

<script>
import LeaveInfo from '@/components/leave/LeaveInfo.vue';
import LeaveTable from '@/components/leave/LeaveTable.vue';
import LeaveForm from '@/components/leave/LeaveForm.vue';

export default {
  components: { LeaveInfo, LeaveTable, LeaveForm },
};
</script>
