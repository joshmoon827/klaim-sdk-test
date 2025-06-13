import axios, { AxiosInstance } from 'axios';

let customAxios: AxiosInstance;

export function setApiBaseUrl(baseURL: string) {
  customAxios = axios.create({
    baseURL,
    timeout: 10000,
  });
  // 인터셉터 재설정
  customAxios.interceptors.request.use(config => {
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
}

// 기본값: 외부 API 서버
setApiBaseUrl('https://external-api-server');

export { customAxios };
