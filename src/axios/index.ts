import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://external-api-server',
  timeout: 10000,
});

export default customAxios;
