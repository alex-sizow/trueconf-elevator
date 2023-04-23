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

      const result = state.shafts.reduce((prev, curr) => {
        return Math.abs(curr.floor - newCall) < Math.abs(prev.floor - newCall)
          ? curr
          : prev;
      });
      const currentIndex = (element) => element === result;

      //slice
      const index = state.shafts.findIndex(currentIndex);
      console.log('index', index);
      state.shafts[index].floor = newCall;
    },
  },
});
