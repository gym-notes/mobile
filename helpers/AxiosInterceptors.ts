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
export const GET_ALL_PLANS_URL = `${BASE_URL}plans/my`;
export const GET_MY_PLAN_URL = `${BASE_URL}plans/`;
export const CREATE_WORKOUT = `${BASE_URL}workouts`;
export const GET_WORKOUT_BY_ID = `${BASE_URL}workouts/`;
export const GET_EXERCISES = `${BASE_URL}exercises/my`;
export const GET_PROFILE = `${BASE_URL}accounts/me`;
export const UPDATE_PROFILE = `${BASE_URL}accounts/me`;
export const CREATE_PLAN = `${BASE_URL}plans`;
export const GET_WORKOUTS_HISTORY = `${BASE_URL}workouts/summaries`;
export const GET_LATEST_WORKOUT = `${BASE_URL}workouts/latest`;
export const CREATE_EXERCISE = `${BASE_URL}exercises`;
