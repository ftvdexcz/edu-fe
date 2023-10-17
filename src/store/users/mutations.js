export default {
  setData(state, payload) {
    const { limit, totalPages, results } = payload;
    state.limit = limit;
    state.totalPages = totalPages;
    state.data = results;
  },

  deleteUserById(state, userId) {
    state.data = state.data.filter((user) => user.id !== userId);
  },

  setFilter(state, payload) {
    state.nameFilter = payload.name;
    state.roleFilter = payload.role;
  },
};
