<script>
import FloorButton from './components/FloorButton.vue';
import LiftShaft from './components/LiftShaft.vue';

export default {
  name: 'App',
  components: { LiftShaft, FloorButton },
};
</script>

<template>
  <div class="container">
    <lift-shaft></lift-shaft>
    <div class="buttons">
      <div class="buttons">
        <floor-button
          v-for="(floor, index) in this.$store.state.floors"
          :floor="floor"
          :key="index"
        ></floor-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  column-gap: 10px;
}
.buttons {
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
}
</style>
