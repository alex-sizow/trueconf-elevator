<script>
export default {
  name: 'FloorButton',

  data() {
    return { callActive: false };
  },

  props: {
    floor: Number,
  },
  methods: {
    call() {},
  },
};
</script>

<template>
  <div>
    <button @click="call" :class="[callActive ? 'blink' : '']">
      <div>{{ floor }}</div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@keyframes blink {
  50% {
    border: 2px solid red;
    color: red;
    box-shadow: 5px 5px 7px #ffdada, -5px -5px 7px #fbd8d8;
  }
}

.blink {
  animation-name: blink;
  animation-timing-function: linear;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
}

button {
  width: 30px;
  height: 30px;
  margin: 60px;
  color: black;
  background: rgb(250, 250, 250);
  border-radius: 5px;
  border: 3px solid black;
}
</style>
