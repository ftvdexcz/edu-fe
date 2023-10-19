export default {
  setData(state, data) {
    state.data = data;
  },
  setPagination(state, payload) {
    state.limit = payload.limit;
    state.totals = payload.totals;
  },
  setFilter(state, payload) {
    state.nameFilter = payload.name;
    state.weekFilter = payload.week;
  },
  updateApprove(state, payload) {
    const d = state.data.find((d) => d.id === payload.id);
    d.status = 1;
    d.approver.name = payload.name;
    d.approver.id = payload.userId;
  },
};
