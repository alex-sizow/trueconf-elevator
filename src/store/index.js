import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      floors: 6,
      shafts: [1, 1, 1],
      calls: [],
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
        state.calls.push(payload);
      }
    },

    selectionElevator(state) {
      const newCall = state.calls[state.calls.length - 1];

      const result = state.shafts.reduce((prev, curr) => {
        return Math.abs(curr - newCall) < Math.abs(prev - newCall)
          ? curr
          : prev;
      });

      const currentIndex = (element) => element === result;
      //slice
      const index = state.shafts.findIndex(currentIndex);
      state.shafts[index] = newCall;
    },
  },
});
