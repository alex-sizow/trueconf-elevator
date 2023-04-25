import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      floors: 6,
      shafts: [
        {
          floor: 1,
          busy: false,
        },
        {
          floor: 1,
          busy: false,
        },
        {
          floor: 1,
          busy: false,
        },
      ],
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
      state.calls.push(payload);
    },

    selectionElevator(state) {
      const newCall = state.calls[state.calls.length - 1];

      const result = state.shafts.find(
        (num) =>
          (Math.abs(num.floor - newCall) ===
            Math.min(...state.shafts.map((n) => Math.abs(n.floor - newCall))) &&
            num.busy === false) ||
          num.busy === false
      );

      const currentIndex = (element) => element === result;

      //slice
      const index = state.shafts.findIndex(currentIndex);
      state.shafts[index] = {
        floor: newCall,
        busy: true,
      };
    },

    releaseElevator(state, index) {
      state.shafts[index].busy = false;
    },
  },
  actions: {},
});
