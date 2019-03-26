import '@babel/polyfill';

const defaultHeaders = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

async function fetchData(url, method = 'get', headers = defaultHeaders) {
  if (url) {
    try {
      const response = await fetch(url, {
        method,
        headers,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      throw error.message;
    }
  }
  return null;
}

export default fetchData;
