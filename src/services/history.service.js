import baseService from './base.service';

const resources = 'histories';

export default {
  reportMonth(payload) {
    return baseService.get(
      `${resources}?timeFrom=${payload.timeFrom}&timeTo=${payload.timeTo}&page=1&limit=300&sortBy=createdAt:desc&userId=64c6700b44ea50d197b04247`
    );
  },

  //   https://ptit.io.vn/api/v1/histories?timeFrom=2023-10-12&timeTo=2023-10-21&page=1&limit=30&sortBy=createdAt:desc&userId=64c6700b44ea50d197b04247
};
