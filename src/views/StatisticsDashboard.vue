<template>
  <div class="stats">
    <!-- <el-row :gutter="24">
      <el-col :span="8">
        <el-card shadow="always"> Always </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"> Hover </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never"> Never </el-card>
      </el-col>
    </el-row> -->

    <area-chart></area-chart>
  </div>
</template>

<script>
import AreaChart from '@/components/dashboard/stats/AreaChart.vue';

export default {
  components: {
    AreaChart,
  },
};
</script>

<style scoped>
.stats {
  width: 100%;
  height: 75rem;
}
</style>
