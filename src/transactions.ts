import { customAxios } from './axios';

// 거래 내역 조회
export async function getTransactions(apiKey: string, options?: { userId?: string; startDate?: string; endDate?: string; lastKey?: string }) {
  const response = await customAxios.get('/transactions', {
    headers: { 'Authorization': apiKey },
    params: options
  });
  return response.data;
}