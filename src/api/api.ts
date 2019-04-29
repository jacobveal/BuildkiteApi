import axios from 'axios';

export const authHeader = {
  Authorization: `Bearer ${process.env.BUILDKITE_API_TOKEN}`,
};

export const instance = axios.create({
  baseURL: 'https://api.buildkite.com/v2/',
  timeout: 2000,
  headers: authHeader,
});
