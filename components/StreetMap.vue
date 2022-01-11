<template>
  <div id="map"></div>
</template>

<script setup>
import mapboxgl from "mapbox-gl";

// Needs to run in Vue hooks to guarantee client access
onMounted(() => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2hhbmVqZWFybGV5IiwiYSI6ImNreDk2a3lpOTBjaXcydm12ZDk2c3gxeXUifQ.U2Uqnz-oOUMGpG-3_tr3ng";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-74.5, 40],
    zoom: 9,
  });
});
</script>

<style>
/* Selects the mapbox watermark on the map to hide it */
.mapboxgl-control-container {
  display: none;
}
</style>