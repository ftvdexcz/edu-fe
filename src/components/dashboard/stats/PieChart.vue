<template>
  <Pie id="pie-chart" :options="options" :data="data" />
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  components: { Pie },
  props: {
    late: {
      type: Number,
      default: 0,
      required: false,
    },
    soon: {
      type: Number,
      default: 0,
      required: false,
    },
    users: {
      type: Number,
      default: 1,
      required: false,
    },
  },
  computed: {
    data() {
      return {
        labels: ['Đi muộn', 'Đúng giờ', 'Nghỉ'],
        datasets: [
          {
            backgroundColor: ['#00D8FF', '#DD1B16', '#ffaf00'],
            data: [
              this.$props.late,
              this.$props.soon,
              this.$props.users - (this.$props.late + this.$props.soon),
            ],
          },
        ],
      };
    },
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          align: 'start',
        },
      },
    };
  },
};
</script>
