// apiService.js
import apiClient from './apiClient';

// export const fetchEndpoint1 = () => {
//     return apiClient.get('/endpoint1');
//   };
export const shortenURLendpoint = (data) => {
    return apiClient.post('/shorten', data);
};