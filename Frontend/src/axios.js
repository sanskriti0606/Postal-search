// src/axios.js

import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://api.postalpincode.in/pincode/110001/', // Replace this with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // Optional: Set timeout for requests
});

// Add a request interceptor (optional)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add Authorization headers or other custom headers here if needed
    // Example: config.headers.Authorization = `Bearer ${yourAuthToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // You can process the response here if needed
    return response;
  },
  (error) => {
    // Handle errors globally (e.g., show notifications)
    return Promise.reject(error);
  }
);

export default axiosInstance;
