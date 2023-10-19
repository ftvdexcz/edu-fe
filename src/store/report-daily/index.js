import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      data: [],
      limit: 10,
      totalPages: 1,
      totalDays: [],

      nameFilter: '',
      periodFilter: '',
      yearFilter: '',
    };
  },
  mutations,
  getters,
  actions,
};
