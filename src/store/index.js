import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      floors: 6,
      shafts: [
        {
          floor: 1,
          busy: false,
          calls: [],
        },
        {
          floor: 1,
          busy: false,
          calls: [],
        },
        {
          floor: 1,
          busy: false,
          calls: [],
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
      state.shafts.push({
        floor: 1,
        busy: false,
        calls: [],
      });
    },

    addCall(state, payload) {
      state.calls.push(payload);
    },

    deleteCall(state, payload) {
      state.calls = state.calls.slice(1);
    },

    selectionElevator(state) {
      const newCall = state.calls[state.calls.length - 1];
      const filterShaft = state.shafts.filter((shaft) => !shaft.busy);
      //
      let result;

      if (filterShaft.length > 0) {
        result = filterShaft.find(
          (shaft) =>
            Math.abs(shaft.floor - newCall) ===
            Math.min(...filterShaft.map((n) => Math.abs(n.floor - newCall)))
        );
      } else {
        result = state.shafts.find(
          (shaft) =>
            Math.abs(shaft.floor - newCall) ===
            Math.min(...state.shafts.map((n) => Math.abs(n.floor - newCall)))
        );
      }

      const currentIndex = (element) => element === result;
      const index = state.shafts.findIndex(currentIndex);

      state.shafts[index].calls.push(newCall);
    },

    releaseElevator(state, index) {
      state.shafts[index].busy = false;
    },
  },
  actions: {
    asyncReleaseElevator({ commit }, payload) {
      setTimeout(() => {
        commit('releaseElevator', payload[0]);
      }, payload[1] * 1000 + 3000);
    },
    asyncDeleteCall({ commit }) {
      setTimeout(() => {
        commit('deleteCall');
      }, 100);
    },
    asyncSelectionElevator({ commit }, time) {
      setTimeout(() => {
        commit('selectionElevator');
      }, time);
    },
  },
});
