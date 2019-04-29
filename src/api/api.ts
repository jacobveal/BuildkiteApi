import axios from 'axios';

export const authHeader = {
  Authorization: 'Bearer 6b1cb3490aa8960649aae26efc650db45e103170',
};

export const instance = axios.create({
  baseURL: 'https://api.buildkite.com/v2/',
  timeout: 2000,
  headers: authHeader,
});
