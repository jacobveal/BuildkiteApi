import { BuildsQueryParams, ValidState } from './types';

export const buildQueryParamUrl = (params: BuildsQueryParams) => {
  let url = '?';
  for (const param in params) {
    switch (param) {
      case 'branches':
        url += handleBranches(params[param]);
        break;
      case 'meta_data':
        url += `meta_data[${params[param].key}]=${params[param].value}`;
        break;
      case 'states':
        url += handleStates(params[param]);
        break;
      default:
        url += `${param}=${params[param]}&`;
    }
  }
  return url.substring(0, url.length - 1);
};

const handleBranches = (branches: string[]) => {
  let url = '';
  if (branches.length === 1) {
    return `branch=${branches[0]}`;
  }
  branches.forEach((branch: string) => {
    url += `branch[]=${branch}&`;
  });
  return url;
};

const handleStates = (states: ValidState[]) => {
  let url = '';
  if (states.length === 1) {
    return `state=${states[0]}`;
  }
  states.forEach((state: string) => {
    url += `state[]=${state}&`;
  });
  return url;
};
