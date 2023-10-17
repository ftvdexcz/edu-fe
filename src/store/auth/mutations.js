export default {
  setUser(state, payload) {
    state.tokens = payload.tokens;
    state.currentUser = payload.currentUser;
  },
  updateUser(state, payload) {
    state.currentUser = payload;
  },

  setTokens(state, payload) {
    state.tokens = payload;
  },

  logout(state) {
    state.tokens = null;
    state.currentUser = null;
  },
};
