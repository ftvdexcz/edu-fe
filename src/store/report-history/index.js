import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      totalPages: 1,
      limit: 10,
      data: [],

      nameFilter: '',
      timeToFilter: '',
      timeFromFilter: '',
    };
  },
  mutations,
  getters,
  actions,
};
