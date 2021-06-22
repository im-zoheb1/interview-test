<template>
  <div class="maps">
    <div class="google-map-overlay"></div>
    <div ref="map" class="google-map"></div>
    <div class="maps-content">
      <div class="maps-form">
        <div class="maps-form-title"></div>
        input
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mapsInit() {
      return new google.maps.Map(this.$refs.map, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    },
  },
  mounted() {
    this.mapsInit();
  },
};
</script>

<style lang="scss" scoped>
.maps {
  position: relative;
}
.google-map {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
.google-map-overlay {
  background: linear-gradient(
    to right bottom,
    var(--blue-gradient-1),
    var(--blue-gradient-1)
  );
  position: absolute;
  inset: 0;
}
</style>
