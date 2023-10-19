import factoryService from '@/services/factory.service';

const historyService = factoryService.get('histories');

export default {
  reportHistory: async (context, payload) => {
    try {
      const response = await historyService.reportHistory(payload);

      if (response.status !== 200) throw new Error('Có lỗi xảy ra');

      const histories = response.data;

      context.commit('setData', histories);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
