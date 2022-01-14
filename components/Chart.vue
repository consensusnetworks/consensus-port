<template>
  <!-- 
    I have found that the best way to make the Chart reactive
    is to use the height prop that the Chart component provides and 
    use the parent component to control the width. 
   -->
  <canvas :id="chartID" :height="height"></canvas>
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
  height: {
    type: String,
    required: true,
    default: '100'
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
});

// Reacts to new data from parent
watch(props.chartData, (chartData, _prevChartData) => {
  chart.data = { ...chartData };
  chart.update();
});
</script>