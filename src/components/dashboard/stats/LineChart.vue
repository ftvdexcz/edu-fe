<template>
  <Line id="line-chart" :options="options" :data="data" />
</template>

<script>
import { Line } from 'vue-chartjs';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: { Line },
  data() {
    return {
      data: {
        // labels: ['CNTT', 'ĐTVT', 'ATTT'],
        datasets: [
          {
            label: 'Đi muộn',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Về sớm',
            backgroundColor: 'rgb(25, 170, 222)',
            data: [],
            fill: false,
            borderColor: 'rgb(25, 170, 222)',
          },
        ],
      },
      options: {
        responsive: true,

        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
            },
          },
          title: {
            text: 'Thống kê theo khoa',
            align: 'center',
            display: true,
            padding: {
              bottom: 20,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: 'Tên khoa',
              font: {
                family: "'roboto'",
                weight: 500,
                size: '13',
              },
              color: '#212529',
              padding: {
                top: 10,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Số người',
              font: {
                family: "'roboto'",
                weight: 500,
                size: '13',
              },
              color: '#212529',
              padding: {
                bottom: 10,
              },
            },
          },
        },
      },
    };
  },
};
</script>
