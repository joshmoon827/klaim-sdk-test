import { customAxios, setApiBaseUrl } from './axios';
export * from './credit';
export * from './users';
export * from './apiKey';
export * from './transactions';

// 서비스 상태 확인(헬스체크)
export async function getAppStatus() {
  const response = await customAxios.get('/app-status');
  return response.data;
}

export { setApiBaseUrl };
