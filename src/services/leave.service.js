import axios from 'axios';

export default {
  async createLeaveReq(payload) {
    try {
      const response = await axios.post(
        'http://203.162.10.118:8888/leaves',
        payload
      );

      return response.data.data;
    } catch (err) {
      return err;
    }
  },

  async approveRequest(payload) {
    try {
      await axios.patch(`http://203.162.10.118:8888/leaves/${payload.id}`, {
        name: payload.name,
        id: payload.userId,
      });
    } catch (err) {
      return err;
    }
  },

  async getLeaves(payload) {
    let url = `http://203.162.10.118:8888/leaves?page=${payload.page}&limit=${payload.limit}`;
    if (payload.userId) {
      url += `&userId=${payload.userId}`;
    } else {
      if (payload.name) {
        url += `&name=${payload.name}`;
      }
      if (payload.timeTo) {
        url += `&timeTo=${payload.timeTo}`;
      }
      if (payload.timeFrom) {
        url += `&timeFrom=${payload.timeFrom}`;
      }
    }

    try {
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      return err;
    }
  },
};
