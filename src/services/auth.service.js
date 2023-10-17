import baseService from './base.service';

const resources = 'auth';

export default {
  login(payload) {
    return baseService.post(`${resources}/login`, payload);
  },
  logout() {
    return baseService.post(`${resources}/logout`);
  },
  refreshToken(refreshToken) {
    return baseService.post(`${resources}/refresh-tokens`, { refreshToken });
  },
};
