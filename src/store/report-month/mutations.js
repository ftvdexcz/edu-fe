export default {
  setFilter(state, payload) {
    state.period = payload.period;
    state.year = payload.year;
  },
  setData(state, data) {
    state.data = data;
  },
};
