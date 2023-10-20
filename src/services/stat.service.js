import baseService from './base.service';

export default {
  getStats(time) {
    try {
      baseService.defaults.baseURL = 'http://117.6.133.148:3000/v1';

      return baseService.get(
        `report/getDashboardOrganization?organizationId=64686098d2fd79714c792c07&time=${time}`
      );
    } catch (err) {
      return err;
    } finally {
      baseService.defaults.baseURL = 'https://ptit.io.vn/api/v1';
    }
  },
};
