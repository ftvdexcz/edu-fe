import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      data: [],
      limit: 10,
      totals: 1,

      nameFilter: '',
      weekFilter: null,
    };
  },
  mutations,
  getters,
  actions,
};
