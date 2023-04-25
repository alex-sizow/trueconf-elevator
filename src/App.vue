<script>
import { mapMutations } from 'vuex';

import FloorButton from './components/FloorButton.vue';
import LiftShaft from './components/LiftShaft.vue';

export default {
  name: 'App',

  data() {
    return {
      calls: this.$store.state.calls,
      shafts: this.$store.state.shafts,
    };
  },

  computed: {
    count() {
      return this.$store.state.shafts;
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    },
  },

  components: { LiftShaft, FloorButton },

  methods: {
    ...mapMutations([
      'addFloors',
      'addShafts',
      'selectionElevator',
      'deleteCall',
    ]),

    addFloor() {
      this.addFloors();
    },
    addShaft() {
      this.addShafts();
    },
  },

  watch: {
    calls: {
      handler(oldVal, newVal) {
        this.selectionElevator();
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="container">
    <lift-shaft
      v-for="(shaft, index) in this.$store.state.shafts"
      :key="index"
      :number="index"
      :floor="shaft.floor"
    ></lift-shaft>
    <div class="buttons">
      <div class="buttons">
        <floor-button
          v-for="(floor, index) in this.$store.state.floors"
          :floor="floor"
          :key="index"
        ></floor-button>
      </div>
    </div>
    <button @click="addFloor">Add floor</button>
    <button @click="addShaft">Add shaft</button>
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
