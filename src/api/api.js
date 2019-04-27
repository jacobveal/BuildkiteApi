import { create } from 'axios';

const auth_header = {
  "Authorization": "Bearer 6b1cb3490aa8960649aae26efc650db45e103170"
}

export const instance = create({
  baseURL: 'https://api.buildkite.com/v2/',
  timeout: 1000,
  headers: auth_header
});
