import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem('token');

    if (!config.headers) config.headers = {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const BASE_URL = 'http://10.0.2.2:3000/api/';

export const LOGIN_URL = `${BASE_URL}auth/login`;
export const REGISTER_URL = `${BASE_URL}auth/register`;
export const GET_MY_PLANS_URL = `${BASE_URL}plans/my`;
export const GET_MY_PLAN_URL = `${BASE_URL}plans/`;
