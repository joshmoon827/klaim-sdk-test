import customAxios from './axios';

// ...existing code...

export async function getAllUsersCredits(apiKey: string, lastKey?: string) {
  const response = await customAxios.get('/credits', {
    headers: { 'Authorization': apiKey },
    params: { last_key: lastKey }
  });
  return response.data;
}

export async function getUserCreditBalance(apiKey: string, userId: string) {
  const response = await customAxios.get(`/credits/${userId}/balance`, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

export async function getUserCreditUsage(apiKey: string, userId: string, options?: { startDate?: string; endDate?: string; lastKey?: string }) {
  const response = await customAxios.get(`/credits/${userId}/usage`, {
    headers: { 'Authorization': apiKey },
    params: options
  });
  return response.data;
}

export async function putUserCredit(apiKey: string, userId: string, amount: number) {
  const response = await customAxios.put(`/credits/${userId}`, { amount }, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// ...existing code...