import axiosInstance from './base.service';
import tokensUtils from '@/utils/tokens';

// const UseCurrentUserToken = [''];

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = store.getters['auth/getAccessToken'];

      if (accessToken) {
        config.headers['Authorization'] = 'Bearer ' + accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    async (res) => {
      const originalConfig = res.config;
      if (originalConfig.url !== '/auth/login') {
        // Access Token was expired
        if (res.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post('/auth/refresh-tokens', {
              refreshToken: store.getters['auth/getRefreshToken'],
            });

            const responseTokens = rs.data;

            tokensUtils.setTokenLocalStorage(responseTokens);
            store.commit('auth/setTokens', responseTokens);

            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== '/auth/login') {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const rs = await axiosInstance.post('/auth/refresh-tokens', {
              refreshToken: store.getters['auth/getRefreshToken'],
            });

            const responseTokens = rs.data;

            tokensUtils.setTokenLocalStorage(responseTokens);
            store.commit('auth/setTokens', responseTokens);

            return axiosInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    }
  );
};

export default setup;
