import { instance } from './api';
import { buildQueryParamUrl, BuildQueryParams } from './utils';

export const listBuildsForPipeline = async (
  organization: string,
  pipeline: string,
  params?: BuildQueryParams) => {

  try {
    const queryParams = params ? buildQueryParamUrl(params) : '';
    return (await instance.get(
      `organizations/${organization}/pipelines/${pipeline}/builds${queryParams}`,
      )).data;
  } catch (error) {
    throw error;
  }
};
