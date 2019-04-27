 export const buildQueryParamUrl = (params) => {
   let url = '?';
   for(const param in params) {
    url += `${param}=${params[param]}&`
   }
   return url.substring(0, url.length-1);
 }
