import { customAxios } from './axios';

// 특정 유저 정보 조회
export async function getUser(apiKey: string, userId: string) {
  const response = await customAxios.get(`/users/${userId}`, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// 유저 생성
export async function createUser(apiKey: string, userData: object) {
  const response = await customAxios.post('/users', userData, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// 유저 정보 수정
export async function updateUser(apiKey: string, userId: string, updateData: object) {
  const response = await customAxios.put(`/users/${userId}`, updateData, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}