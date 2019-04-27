import { instance } from './api';

export const listArtifactsForJob = async (artifacts_url) => {
  try {
    return (await instance.get(artifacts_url)).data
  } catch (error) {
    throw error
  }
}
