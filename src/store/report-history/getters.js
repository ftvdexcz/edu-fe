export default {
  getHistory(state) {
    return state.data;
  },
  getLimit(state) {
    return state.limit;
  },
  getTotalPages(state) {
    return state.totalPages;
  },
  getNameFilter(state) {
    return state.nameFilter;
  },
  getTimeToFilter(state) {
    return state.timeToFilter;
  },
  getTimeFromFilter(state) {
    return state.timeFromFilter;
  },
};
