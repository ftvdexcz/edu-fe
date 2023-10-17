import factoryService from '@/services/factory.service';

const userService = factoryService.get('users');

export default {
  async listTeachersByRole(context, options) {
    const { page, limit, role, name } = options;
    try {
      const response = await userService.listTeachersByRole(
        page,
        limit,
        role,
        name
      );

      if (response.status !== 200) throw new Error('Có lỗi xảy ra');

      context.commit('setData', response.data);
    } catch (err) {
      return err;
    }
  },
};
