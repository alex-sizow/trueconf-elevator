<script>
import LiftItem from './LiftItem.vue';
export default {
  name: 'LiftShaft',

  components: { LiftItem },

  data() {
    return {
      animationTime: 0,
    };
  },

  props: {
    floor: Number,
    number: Number,
  },

  methods: {},

  watch: {
    floor: {
      handler(oldVal, newVal) {
        const difference = Math.abs(oldVal - newVal);
        this.animationTime = difference;
        this.$store.dispatch('asyncReleaseElevator', [this.number, difference]);
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="shaft">
    <lift-item
      :style="{
        bottom: `${150 * floor - 150}px`,
        transition: `${animationTime}.0s`,
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
