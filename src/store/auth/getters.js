export default {
  getCurrentUser(state) {
    return state.currentUser;
  },
  getTokens(state) {
    return state.tokens;
  },
  getAccessToken(_, getters) {
    const tokens = getters.getTokens;
    if (tokens && tokens.access) {
      return tokens.access.token;
    }

    return null;
  },
  getRefreshToken(_, getters) {
    const tokens = getters.getTokens;
    if (tokens && tokens.refresh) {
      return tokens.refresh.token;
    }

    return null;
  },
};
