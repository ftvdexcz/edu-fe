export default {
  setTokenLocalStorage(tokens) {
    localStorage.setItem('tokens', JSON.stringify(tokens));
  },

  getTokenLocalStorage() {
    const tokens = JSON.parse(localStorage.getItem('tokens'));

    return tokens;
  },

  getAccessTokenLocalStorage() {
    const tokens = this.getTokenLocalStorage();

    if (tokens) return tokens.access;
    return null;
  },

  getRefreshTokenLocalStorage() {
    const tokens = this.getTokenLocalStorage();

    if (tokens) return tokens.refresh;
    return null;
  },

  checkRole(curRole, needRole) {
    return curRole === needRole;
  },
};
