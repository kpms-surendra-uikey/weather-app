<template>
    <BaseChart :chartData="chartData" :chartOptions="chartOptions" />
</template>
    
<script>
import BaseChart from './BaseChart.vue';
  
export default {
    components: {
      BaseChart,
    },
    props: {
      labels: {
        type: Array,
        default: () => ([]),
      },
      tempData: {
        type: Array,
        default: () => ([]),
      }
    },
    data() {
      return {
        chartData: {
          type: 'line', // Choose chart type: 'line', 'bar', 'pie', etc.
          data: {
            labels: ['', ...this.labels, ''],
            datasets: [
              {
                label: 'Minimum Temprature',
                data: [0, ...this.tempData, '50'],
                backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
        },
        chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        },
      };
    },
  };
</script>
  