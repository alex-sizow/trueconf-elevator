<script>
import { mapActions } from 'vuex';

import LiftItem from './LiftItem.vue';
export default {
  name: 'LiftShaft',

  components: { LiftItem },

  data() {
    return {
      time: 0,
      calls: this.$store.state.shafts[this.number].calls,
    };
  },

  props: {
    floor: Number,
    number: Number,
  },

  computed: {
    count() {
      return this.$store.state.shafts[this.number].busy;
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    },
  },

  methods: { ...mapActions(['asyncDeleteCall']) },

  watch: {
    calls: {
      handler(newVal, oldVal) {
        const currentCall = this.calls[this.calls.length - 1];
        const currentFloor = this.$store.state.shafts[this.number].floor;
        const busy = this.$store.state.shafts[this.number].busy;
        if (!busy || currentCall === currentFloor) {
          this.$store.state.shafts[this.number].floor = currentCall;
        }

        this.$store.state.shafts[this.number].busy = true;
      },
      deep: true,
    },
    floor: {
      handler(newVal, oldVal) {
        const difference = Math.abs(oldVal - newVal);
        this.time = difference;

        this.$store.dispatch('asyncReleaseElevator', [this.number, difference]);
      },
    },
    count: {
      handler(value) {
        const currentCall = this.calls[0];
        if (value === true) {
          this.$store.state.shafts[this.number].calls.shift();
        } else if (this.calls.length === 0) {
        } else if (value === false && this.calls.length > 0) {
          this.$store.state.shafts[this.number].floor = currentCall;
          this.$store.state.shafts[this.number].calls.shift();
        } else if (value === false) {
          this.$store.state.shafts[this.number].floor = currentCall;
        }
      },
    },
  },
};
</script>

<template>
  <div class="shaft">
    <lift-item
      :style="{
        bottom: `${150 * floor - 150}px`,
        transition: `${time}.0s`,
      }"
      ><div></div
    ></lift-item>
  </div>
</template>

<style lang="scss" scoped>
.shaft {
  width: 150px;

  border: 2px solid rgb(137, 126, 126);
  position: relative;
}
</style>
