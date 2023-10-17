<template>
  <el-table
    :data="this.$store.getters['reportMonth/getData']"
    style="width: 100%"
    border
    size="large"
  >
    <el-table-column type="index" label="STT" min-width="90" align="center" />
    <el-table-column
      prop="day"
      label="Ngày"
      min-width="180"
      header-align="center"
      align="center"
    />
    <el-table-column
      prop="shift"
      label="Kíp"
      min-width="90"
      header-align="center"
      align="center"
    />
    <el-table-column
      label="Thời gian"
      min-width="180"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div style="display: flex; align-items: center; flex-direction: column">
          <span>{{ scope.row.checkIn ? `${scope.row.checkIn}` : '' }}</span>
          <span>-</span>
          <span>{{ scope.row.checkOut ? `${scope.row.checkOut}` : '' }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="Có phép"
      min-width="180"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div class="permission" v-if="scope.row.leavePermission === 1">
          <el-icon color="#308EE0" :size="16"><CircleCheck /></el-icon>
        </div>
        <div v-else></div>
      </template>
    </el-table-column>
    <el-table-column
      label="Không phép"
      min-width="180"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div class="permission" v-if="scope.row.leavePermission === 0">
          <el-icon color="#308EE0" :size="16"><CircleCheck /></el-icon>
        </div>
        <div v-else></div>
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      min-width="180"
      label="Trạng thái"
      header-align="center"
      align="center"
    >
      <template #default="scope">
        <div>
          <span
            :style="{
              backgroundColor: customColor(scope.row.status),
              padding: '1.2rem',
            }"
          >
            {{ reportStatus(scope.row.status) }}
          </span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ElTable, ElIcon } from 'element-plus';
import { CircleCheck } from '@element-plus/icons-vue';
import Constant from '@/const/const';

export default {
  components: {
    ElTable,
    ElIcon,
  },
  setup() {
    const reportStatus = (val) => {
      return Constant.reportTypes[val].value;
    };
    const customColor = (val) => {
      return Constant.reportTypes[val].colorStyle;
    };

    return {
      reportStatus,
      customColor,

      CircleCheck,
    };
  },
};
</script>

<style scoped></style>
