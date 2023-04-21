import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      floors: 6,
      shafts: [1, 1, 1],
      calls: [5],
    };
  },
  getters: {},
  mutations: {
    addFloors(state) {
      state.floors += 1;
    },
    addShafts(state) {
      state.shafts.push(1);
    },
    addCall(state, payload) {
      if (!state.calls.includes(payload)) {
        state.calls.unshift(payload);
      }
    },
    selectionElevator(state) {
      const newCall = state.calls[0];

      const result = state.shafts.reduce((prev, curr) => {
        return Math.abs(curr - newCall) < Math.abs(prev - newCall)
          ? curr
          : prev;
      });

      const currentIndex = (element) => element === result;

      const index = state.shafts.findIndex(currentIndex);
      state.shafts[index] = newCall;

    },
  },
});
