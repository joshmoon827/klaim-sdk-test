import customAxios from './axios';

// API 키 정보 조회
export async function getApiKey(apiKey: string) {
  const response = await customAxios.get('/api-key', {
    headers: { 'Authorization': apiKey },
    params: { apiKey }
  });
  return response.data;
}

// API 키 사용 이력 조회
export async function getApiKeyUsage(apiKey: string) {
  const response = await customAxios.get('/api-key/usage', {
    headers: { 'Authorization': apiKey },
    params: { apiKey }
  });
  return response.data;
}

// API 키 생성
export async function createApiKey(apiKey: string, data: object) {
  const response = await customAxios.post('/api-key', data, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// API 키 삭제(비활성화)
export async function deleteApiKey(apiKey: string) {
  const response = await customAxios.delete('/api-key', {
    params: { apiKey }
  });
  return response.data;
}