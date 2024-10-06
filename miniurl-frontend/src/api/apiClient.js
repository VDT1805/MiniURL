import axios from 'axios';
import { toast } from 'react-toastify';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.response.use(
    response => response,
    error => {
      console.error('API call failed:', error);
      // Handle specific error cases
      if (error.response.status === 401) {
        toast.error('Unauthorized');
      } else if (error.response.status === 404) {
        toast.error('Resource not found');
      }
      return Promise.reject(error);
    }
  );

  export default apiClient;