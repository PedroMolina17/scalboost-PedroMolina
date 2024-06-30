import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log('API_BASE_URL:', apiUrl);

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
