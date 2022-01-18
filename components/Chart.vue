<template>
  <canvas :id="chartID"></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";

const props = defineProps({
  chartID: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
    default: 'line'
  },
  chartData: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: ""
  },
  xTitle: {
    type: String,
    required: false,
    default: ""
  },
  yTitle: {
    type: String,
    required: false,
    default: ""
  },
});

let ctx = null;
let chart = null;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2.25,
  onResize: null,
  resizeDelay: 0,
  animtion: false,
  scales: {
    x: {
      display: true,
      grid: {
        display: false
      },
      title: {
        display: true,
        text: props.xTitle
      },
    },
    y: {
      display: true,
      grid: {
        display: false
      },
      title: {
        display: true,
        text: props.yTitle
      }
    },
  },
  plugins: {
    title: {
      display: true,
      text: props.title
    },
  },
};


// Init to run in mounted hook to guarantee client access
onMounted(() => {
  ctx = document.getElementById(props.chartID).getContext("2d");
  chart = new Chart(ctx, {
    data: props.chartData,
    type: props.type,
    options,
  });
  // window.addEventListener('resize', chart.resize())
});

// Reacts to new data from parent
watch(props.chartData, (chartData, _prevChartData) => {
  chart.data = { ...chartData };
  chart.update();
});
</script>