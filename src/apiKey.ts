import customAxios from './axios';

// Function to get API Key details
export async function getApiKey(apiKey: string) {
  const response = await customAxios.get('/api-key', {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// Function to get API Key usage statistics
export async function getApiKeyUsage(apiKey: string) {
  const response = await customAxios.get('/api-key/usage', {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// Function to delete an API Key
export async function deleteApiKey(apiKey: string) {
  const response = await customAxios.delete('/api-key', {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}

// Function to create a new API Key
export async function createApiKey(apiKey: string, data: { appId: string; permissions?: string[] }) {
  const response = await customAxios.post('/api-key', data, {
    headers: { 'Authorization': apiKey }
  });
  return response.data;
}