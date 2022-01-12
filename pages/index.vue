<template>
  <div>
    <h1>Works!</h1>
    <Chart :chartData="chartData" />
    <Map :mapData="mapData" />
  </div>
</template>

<script setup>
const chartData = useState("chartData", () => {
  return {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        type: "bar",
        label: "# of Votes",
        data: [1, 2, 3, 4, 5, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
});
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const shuffleType = (type) => {
  if (type === "bar") {
    chartData.value.datasets[0].type = "line";
  } else {
    chartData.value.datasets[0].type = "bar";
  }
};

const mapData = useState("mapData", () => {
  return {
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40],
    zoom: 9,
  };
});
const latBounds = [-122, -77];
const lngBounds = [30, 50];
const shufflePoint = (_point) => {
  const lat = Math.random() * (latBounds[1] - latBounds[0] + 1) + latBounds[0];
  const lng = Math.random() * (lngBounds[1] - lngBounds[0] + 1) + lngBounds[0];
  mapData.value.center = [lat, lng];
};
const shuffleZoom = (_zoom) => {
  mapData.value.zoom = Math.random() * (10 - 1 + 1) + 1;
};

setInterval(async () => {
  shuffleArray(chartData.value.datasets[0].data);
  shuffleType(chartData.value.datasets[0].type);
  shufflePoint(mapData.value.center);
  shuffleZoom(mapData.value.zoom);
}, 3000);


</script>