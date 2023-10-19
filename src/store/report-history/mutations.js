export default {
  setData(state, payload) {
    const { limit, totalPages, results } = payload;
    state.limit = limit;
    state.totalPages = totalPages;
    state.data = results;
  },

  setFilter(state, payload) {
    state.nameFilter = payload.name;
    state.timeToFilter = payload.timeTo;
    state.timeFromFilter = payload.timeFrom;
  },
};
