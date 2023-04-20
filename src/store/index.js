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
      state.calls.push(payload);
    },
  },
});
