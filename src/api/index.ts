import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_POST_API_URL
});

api.interceptors.request.use(config => {
  config.headers['Authorization'] = process.env.NEXT_POST_API_TOKEN;

  return config;
});

export default api;
