<template>
  <div id="map"></div>
</template>

<script setup>
import mapboxgl from "mapbox-gl";

const config = useRuntimeConfig();

const props = defineProps({
  mapData: {
    type: Object,
    required: true,
  },
});

let map = null;

// Init to run in mounted hook to guarantee client access
onMounted(() => {
  mapboxgl.accessToken = config.MAPBOX_ACCESS_TOKEN;
  map = new mapboxgl.Map({
    container: "map",
    style: props.mapData.style,
    center: props.mapData.center,
    zoom: props.mapData.zoom,
  });
});

// Reacts to new data from parent
watch(props.mapData, (mapData, _prevMapData) => {
  map.setCenter(mapData.center);
  map.setZoom(mapData.zoom);
});
</script>

<style>
/* Selects the mapbox watermark on the map to hide it */
.mapboxgl-control-container {
  display: none;
}
</style>