// apiService.js
import apiClient from './apiClient';

export const originalURLendpoint = (id) => {
    return apiClient.get(`/${id}`);
  };
export const shortenURLendpoint = (data) => {
    return apiClient.post('/shorten', data);
};