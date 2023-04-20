<script>
import LiftItem from './LiftItem.vue';
export default {
  components: { LiftItem },
  name: 'LiftShaft',
  props: {
    floor: Number,
  },
};
</script>

<template>
  <div class="shaft"><lift-item></lift-item></div>
</template>

<style lang="scss" scoped>
.shaft {
  width: 150px;

  border: 2px solid rgb(137, 126, 126);
  position: relative;
}
</style>
