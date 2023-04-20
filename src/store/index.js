import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      floors: 6,
      shafts: 3,
    };
  },
  getters: {},
  mutations: {
    addFloors(state) {
      state.floors += 1;
    },
    addShafts(state) {
      state.shafts += 1;
    },
  },
});
