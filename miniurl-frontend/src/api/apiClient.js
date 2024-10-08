import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
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
      if (error.response.status === 404) {
        toast.error("URL not found or expired. Please go back");
      }
      else {
        toast.error("An error occurred. Please try again later.");
      }
      return Promise.reject(error);
    }
  );

  export default apiClient;