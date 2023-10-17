import authService from './auth.service';
import historyService from './history.service';
import userService from './user.service';

const services = {
  users: userService,
  auth: authService,
  histories: historyService,
};

export default {
  get(name) {
    return services[name];
  },
};
