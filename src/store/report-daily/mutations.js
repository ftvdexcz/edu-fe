export default {
  setData(state, data) {
    state.data = data;
  },
  setPagination(state, payload) {
    state.limit = payload.limit;
    state.totalPages = payload.totalPages;
  },
  setFilter(state, payload) {
    state.nameFilter = payload.name;
    state.periodFilter = payload.period;
    state.yearFilter = payload.year;
  },
  setTotalDays(state, totalDays) {
    state.totalDays = totalDays;
  },
};
