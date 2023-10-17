import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      data: [],
      period: null,
      year: null,
    };
  },
  mutations,
  getters,
  actions,
};
