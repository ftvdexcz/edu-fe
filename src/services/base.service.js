import axios from 'axios';

const baseDomain = 'https://ptit.io.vn';
const baseURL = `${baseDomain}/api/v1`;

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
