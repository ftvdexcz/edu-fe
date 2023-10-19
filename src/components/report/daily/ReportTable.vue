<template>
  <div class="report-dialy_table">
    <el-table
      :data="this.$store.getters['reportDaily/getData']"
      style="width: 100%"
      height="500"
      size="large"
    >
      <el-table-column
        fixed
        type="index"
        label="STT"
        width="100"
        align="center"
      />

      <el-table-column
        fixed
        prop="userName"
        label="Họ tên"
        width="200"
        header-align="center"
        align="center"
      />
      <el-table-column label="Buổi" header-align="center">
        <el-table-column
          v-for="(val, index) in this.$store.getters[
            'reportDaily/getTotalDays'
          ]"
          :key="val.day"
          :label="`${index + 1}`"
          width="60"
          header-align="center"
          align="center"
        >
          <template #header="headerSlots">
            <el-tooltip
              effect="dark"
              placement="top"
              :hide-after="0"
              :show-after="200"
            >
              <template #default>
                <div>
                  {{ headerSlots.column.label }}
                </div>
              </template>
              <template #content>
                <div>
                  {{ columnKey(index) }}
                </div>
              </template>
            </el-tooltip>
          </template>
          <template #default="scopedSlots">
            <el-tooltip
              effect="dark"
              placement="top"
              :hide-after="0"
              :show-after="200"
            >
              <template #default>
                <div
                  :style="{
                    backgroundColor: scopedSlots.row.reports[index]
                      ? customColor(scopedSlots.row.reports[index].status)
                      : '',
                  }"
                >
                  {{
                    scopedSlots.row.reports[index]
                      ? customVal(scopedSlots.row.reports[index].status)
                      : ''
                  }}
                </div>
              </template>
              <template #content>
                <div>
                  <p>CheckIn: {{ scopedSlots.row.reports[index].checkIn }}</p>

                  <p>CheckOut: {{ scopedSlots.row.reports[index].checkOut }}</p>
                </div>
              </template>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- <div class="pagination-actions">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="this.$store.getters['reportHistory/getTotalPages']"
      :page-size="this.$store.getters['reportHistory/getLimit']"
      @current-change="handlePageChange"
    />
  </div> -->
  </div>
</template>

<script>
import { ElTable, ElTooltip } from 'element-plus';
import { CircleCheck } from '@element-plus/icons-vue';
import Constant from '@/const/const';
import { useStore } from 'vuex';

export default {
  components: {
    ElTable,
    ElTooltip,
  },
  setup() {
    const store = useStore();
    const customColor = (val) => {
      return Constant.reportTypes[val].colorStyle;
    };

    const customVal = (val) => {
      if (val === 1) return 'M';
      else if (val === 2) return 'S';
      else if (val === 3) return 'MS';
      else if (val === 4) return 'N';
      else if (val === 5) return 'Đ';
      return '';
    };

    const columnKey = function (idx) {
      return `Ngày: ${
        store.getters['reportDaily/getTotalDays'].at(idx).day
      } , Ca: ${store.getters['reportDaily/getTotalDays'].at(idx).shift}`;
    };

    return { CircleCheck, customColor, customVal, columnKey };
  },
};
</script>

<style scoped>
.permission {
  line-height: 1;
}
</style>
