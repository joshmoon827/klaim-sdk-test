import { customAxios } from './axios';

// 모든 유저의 크레딧 목록 조회
export async function getAllUsersCredits(apiKey: string, lastKey?: string) {
  const response = await customAxios.get('/users/credits', {
    headers: { 'Authorization': apiKey },
    params: lastKey ? { lastKey } : undefined
  });
  return response.data;
}

// 특정 유저의 크레딧 잔액 조회
export async function getUserCreditBalance(apiKey: string, userId: string) {
  const response = await customAxios.get(`/users/${userId}/credits`, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// 특정 유저의 크레딧 사용 내역 조회
export async function getUserCreditUsage(apiKey: string, userId: string) {
  const response = await customAxios.get(`/users/${userId}/credits/usage`, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// 특정 유저의 크레딧 증감(충전/차감)
export async function putUserCredit(apiKey: string, userId: string, credit_delta: number, description: string) {
  const response = await customAxios.put(`/users/${userId}/credits`, { credit_delta, description }, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}
