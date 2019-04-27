import { instance } from './api';
import { buildQueryParamUrl } from './utils'

export const getBuildsList = async (organization, pipeline, params) => {
  let query_params = ''
  if(params){
    query_params = buildQueryParamUrl(params)
  }
  try {
    return (await instance.get(`organizations/${organization}/pipelines/${pipeline}/builds${query_params}`)).data;
  } catch (error) {
    throw error
  }
}
