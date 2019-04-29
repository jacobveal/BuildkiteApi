import { instance } from './api';
import { buildQueryParamUrl } from '../utils';
import { BuildsQueryParams } from '../types';

export const listBuildsForPipeline = async (
  organization: string,
  pipeline: string,
  params?: BuildsQueryParams) => {

  try {
    const queryParams = params ? buildQueryParamUrl(params) : '';
    return (await instance.get(
      `organizations/${organization}/pipelines/${pipeline}/builds${queryParams}`,
      )).data;
  } catch (error) {
    throw error;
  }
};
