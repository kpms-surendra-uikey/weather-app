<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
</template>
  
<script>
import { Chart } from 'chart.js/auto'; // Auto imports needed Chart.js modules
  
export default {
    props: {
      chartId: {
        type: String,
        default: 'base-chart',
      },
      chartData: {
        type: Object,
        required: true,
      },
      chartOptions: {
        type: Object,
        default: () => ({}),
      },
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.chartCanvas.getContext('2d');
        new Chart(ctx, {
          type: this.chartData.type, // 'bar', 'line', etc.
          data: this.chartData.data,
          options: this.chartOptions,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling if necessary */
  </style>
  