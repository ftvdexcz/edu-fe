import leaveService from '@/services/leave.service';
import { ElMessage } from 'element-plus';
import helpers from '@/utils/helpers';

export default {
  async getLeaves(context, payload) {
    try {
      if (payload.week) {
        const { timeFrom, timeTo } = helpers.getWeek(payload.week);
        payload.timeFrom = timeFrom;
        payload.timeTo = timeTo;
      }

      const response = await leaveService.getLeaves(payload);

      const { totals, limit, results } = response;

      context.commit('setData', results);
      context.commit('setPagination', {
        limit,
        totals,
      });
    } catch (err) {
      console.log(err);
      ElMessage.error(err);
    }
  },

  async approveRequest(context, payload) {
    try {
      await leaveService.approveRequest(payload);

      context.commit('updateApprove', payload);
    } catch (err) {
      console.log(err);
      ElMessage.error(err);
    }
  },
};
