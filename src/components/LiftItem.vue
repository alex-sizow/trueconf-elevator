<script>
export default { name: 'LiftItem' };
</script>

<template>
  <div class="lift"><slot></slot></div>
</template>

<style lang="scss" scoped>
.lift {
  position: absolute;
  width: 100%;
  height: 150px;
  background-color: aqua;
  bottom: 0;
}
</style>
