<template>
  <canvas id="chart" width="10" height="20"></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";

const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

let ctx = null;
let chart = null;

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Init to run in mounted hook to guarantee client access
onMounted(() => {
  ctx = document.getElementById("chart").getContext("2d");
  chart = new Chart(ctx, {
    data: props.chartData,
    options,
  });
});

// Reacts to new data from parent
watch(props.chartData, (chartData, _prevChartData) => {
  chart.data = { ...chartData };
  chart.update();
});
</script>