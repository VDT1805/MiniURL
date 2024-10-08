import axios from 'axios';
import { toast } from 'react-toastify';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.response.use(
    response => response,
    error => {
      // Handle specific error cases
      toast.error("Something went wrong. Please try again later.");
  
      return Promise.reject(error);
    }
  );

  export default apiClient;