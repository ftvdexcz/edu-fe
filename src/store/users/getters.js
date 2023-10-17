export default {
  getUsers(state) {
    return state.data;
  },
  getLimit(state) {
    return state.limit;
  },
  getTotalPages(state) {
    return state.totalPages;
  },
  getRoleFilter(state) {
    return state.roleFilter;
  },
  getNameFilter(state) {
    return state.nameFilter;
  },
};
