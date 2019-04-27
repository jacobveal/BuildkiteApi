import { create } from 'axios';

const auth_header = {
  "Authorization": "Bearer 6b1cb3490aa8960649aae26efc650db45e103170"
}

const instance = create({
  baseURL: 'https://api.buildkite.com/v2/',
  timeout: 1000,
  headers: auth_header
});

const getAllBuilds = async () => {
  try {
    return await instance.get('organizations/prize-patrol-test/pipelines/lambda-common/builds');
  } catch (error) {
    throw error
  }
}

getAllBuilds()
  .then((builds) => {
    console.log(builds)
  })
  .catch((error) => {
    console.log(error)
  })
