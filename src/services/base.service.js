import axios from 'axios';

const baseDomain = 'http://117.6.133.148:3000';
const baseURL = `${baseDomain}/v1`;

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
