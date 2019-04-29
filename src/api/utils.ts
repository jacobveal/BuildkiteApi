export type BuildQueryParams = {
  [key: string]: string;
};

export const buildQueryParamUrl = (params: BuildQueryParams) => {
  let url = '?';
  for (const param in params) {
    url += `${param}=${params[param]}&`;
  }
  return url.substring(0, url.length - 1);
};
