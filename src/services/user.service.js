import baseService from './base.service';

const resources = '/users';

export default {
  createTeacher(payload) {
    return baseService.post(`${resources}`, payload);
  },

  listTeachersByRole(page = 1, limit = 10, role = 'MANAGER', name = '') {
    return baseService.get(
      `${resources}?page=${page}&limit=${limit}&role=${role}` +
        (name ? `&name=${name}` : '')
    );
  },

  updateTeacher(id, payload) {
    return baseService.patch(`${resources}/${id}`, payload);
  },

  deleteTeacher(id) {
    return baseService.delete(`${resources}/${id}`);
  },
};
