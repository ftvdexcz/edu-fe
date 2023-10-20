<template>
  <div class="stats">
    <div class="stats-card stats-header">
      <div>
        <el-button link @click="backDay">
          <el-icon color="#007bff" :size="20"><DArrowLeft /></el-icon>
        </el-button>
      </div>
      <div>Thống kê ngày - {{ getTodayFormatted }}</div>
      <div>
        <el-button link :disabled="isToday" @click="forwardDay">
          <el-icon color="#007bff" :size="20"><DArrowRight /></el-icon>
        </el-button>
      </div>
    </div>

    <div class="stats-card stats-item">
      <div>
        <el-icon color="#e65251" :size="40"><Check /></el-icon>
      </div>
      <div>
        <p class="checked">Đã điểm danh</p>
        <div class="checked-stats">
          {{ reports.count }} / {{ reports.users }}
        </div>
      </div>
    </div>
    <div class="stats-card stats-item">
      <div>
        <el-icon color="#ffaf00" :size="40"><PieChart /></el-icon>
      </div>
      <div>
        <p class="checked">Đến muộn</p>
        <div class="checked-stats">{{ reports.late }}</div>
      </div>
    </div>
    <div class="stats-card stats-item">
      <div>
        <el-icon color="#00ce68" :size="40"><Timer /></el-icon>
      </div>
      <div>
        <p class="checked">Về sớm</p>
        <div class="checked-stats">{{ reports.soon }}</div>
      </div>
    </div>
    <div class="stats-card stats-chart">
      <h2>Tổng quát</h2>
      <div class="stats-chart__wrapper">
        <div class="pie-chart">
          <PieChartCpn
            :late="reports.late"
            :soon="reports.soon"
            :users="reports.users"
          />
        </div>
        <div class="line-chart">
          <LineChart />
        </div>
      </div>
    </div>
    <div class="stats-card stats-table">
      <StatsTable />
    </div>
  </div>
</template>

<script>
import PieChartCpn from '@/components/dashboard/stats/PieChart.vue';
import LineChart from '@/components/dashboard/stats/LineChart.vue';
import StatsTable from '@/components/dashboard/stats/StatsTable.vue';
import helpers from '@/utils/helpers';
import { computed, reactive, ref } from 'vue';
import statsService from '@/services/stat.service';
import { ElMessage } from 'element-plus';

const getStats = async (today) => {
  try {
    const time = helpers.getTodayFormatted2(today);

    const response = await statsService.getStats(time);

    console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
    ElMessage.error(err);
  }
};

export default {
  components: { PieChartCpn, LineChart, StatsTable },
  setup() {
    const today = ref(helpers.getToday());
    const reports = reactive({
      count: 0,
      late: 0,
      soon: 0,
      users: 0,
    });

    (async () => {
      const data = await getStats(today.value);

      reports.count = data.reports.count;
      reports.late = data.reports.late;
      reports.soon = data.reports.soon;
      reports.users = data.users;
    })();

    const getTodayFormatted = computed(() => {
      return helpers.getTodayFormatted(today.value);
    });

    const isToday = computed(() => {
      return today.value.isSame(helpers.getToday(), 'day');
    });

    const backDay = () => {
      today.value = helpers.backDay(today.value);

      (async () => {
        const data = await getStats(today.value);

        reports.count = data.reports.count;
        reports.late = data.reports.late;
        reports.soon = data.reports.soon;
        reports.users = data.users;
      })();
    };
    const forwardDay = () => {
      today.value = helpers.forwardDay(today.value);

      (async () => {
        const data = await getStats(today.value);

        reports.count = data.reports.count;
        reports.late = data.reports.late;
        reports.soon = data.reports.soon;
        reports.users = data.users;
      })();
    };

    return { today, getTodayFormatted, backDay, forwardDay, isToday, reports };
  },
};
</script>

<style scoped>
.stats {
  width: 100%;
}
</style>
