import tokensUtils from '@/utils/tokens';

export default {
  tryLogin(context) {
    const tokens = tokensUtils.getTokenLocalStorage();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (tokens && currentUser) {
      context.commit('setUser', {
        tokens,
        currentUser,
      });
    }
  },
};
