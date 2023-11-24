const api_client = {
  get: async function (url) {
    let response = await fetch(url, {method: 'GET'});
    return await response.json();
  },
  post: async function (url, body) {
    let response = await fetch(url, {method: 'POST', body: body});
    return await response.json();
  },
  put: async function (url, body) {
    let response = await fetch(url, {method: 'PUT', body: body});
    return await response.json();
  },
  delete: async function (url) {
    let response = await fetch(url, {method: 'DELETE', body: body});
    return await response.json();
  }
};
export default api_client;