<template>
  <form class="form-filter">
    <div class="form-controll">
      <label for="period">Kì Học</label>
      <el-select id="period" v-model="period" placeholder="Chọn kì">
        <el-option
          v-for="item in ['Kì 1', 'Kì 2', 'Kì 3']"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <div class="form-controll">
      <label for="year">Năm</label>
      <el-date-picker id="year" v-model="monthInput" type="year" />
    </div>
    <div class="form-actions">
      <el-button color="#00CE68">Tìm kiếm</el-button>
      <el-button color="#308EE0">Xuất báo cáo</el-button>
    </div>
  </form>
</template>

<script>
import { ElDatePicker, ElSelect, ElButton } from 'element-plus';
import { ref } from 'vue';

export default {
  components: {
    ElDatePicker,
    ElSelect,

    ElButton,
  },
  setup() {
    const usernameInput = ref('');
    const monthInput = ref('');

    return {
      usernameInput,
      monthInput,
    };
  },
};
</script>

<style scoped>
.form-filter {
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6.4rem;
}

label {
  display: block;
  line-height: 2;
  font-size: 1.4rem;
  margin-right: 1.6rem;
  min-width: 10rem;
}

.form-actions {
  margin-top: 3.2rem;
  grid-column: span 2;
  text-align: center;
  color: #34a06a;
}

.form-controll {
  display: flex;
}
</style>
