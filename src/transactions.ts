import customAxios from './axios';

export async function getTransactions(apiKey: string, options?: { userId?: string; startDate?: string; endDate?: string; lastKey?: string }) {
  const response = await customAxios.get('/transactions', {
    headers: { 'Authorization': apiKey },
    params: options
  });
  return response.data;
}