import customAxios from './axios';

export async function getUser(apiKey: string, userId: string) {
  const response = await customAxios.get(`/users/${userId}`, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

export async function createUser(apiKey: string, userData: { name: string; email: string }) {
  const response = await customAxios.post('/users', userData, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

export async function updateUser(apiKey: string, userId: string, updateData: object) {
  const response = await customAxios.put(`/users/${userId}`, updateData, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}