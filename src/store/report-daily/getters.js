export default {
  getData(state) {
    return state.data;
  },
  getNameFilter(state) {
    return state.nameFilter;
  },
  getYearFilter(state) {
    return state.yearFilter;
  },
  getPeriodFilter(state) {
    return state.periodFilter;
  },
  getLimit(state) {
    return state.limit;
  },
  getTotalPages(state) {
    return state.totalPages;
  },
  getTotalDays(state) {
    return state.totalDays;
  },
  getTotalDaysLength(_, getters) {
    return getters.getTotalDays.length;
  },
};
