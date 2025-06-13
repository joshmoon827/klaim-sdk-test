import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://external-api-server',
  timeout: 10000,
});

// 모든 요청에 apiKey가 있으면 자동으로 Authorization 헤더에 추가
customAxios.interceptors.request.use(config => {
  // params나 data가 Record<string, any> 타입일 때만 apiKey 처리
  let apiKey: string | undefined;
  if (config.params && typeof config.params === 'object' && 'apiKey' in config.params) {
    apiKey = (config.params as Record<string, any>).apiKey;
    delete (config.params as Record<string, any>).apiKey;
  } else if (config.data && typeof config.data === 'object' && 'apiKey' in config.data) {
    apiKey = (config.data as Record<string, any>).apiKey;
    delete (config.data as Record<string, any>).apiKey;
  }
  if (apiKey) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = apiKey;
  }
  return config;
});

export default customAxios;
