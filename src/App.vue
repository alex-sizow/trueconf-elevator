<script>
import LiftShaft from './components/LiftShaft.vue';

export default {
  components: { LiftShaft },
};
</script>

<template>
  <div class="container">
    <lift-shaft></lift-shaft>
  </div>
</template>

<style scoped lang="scss">
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
