//container component responsible for fetching product objects from rails API that
//match the given query

function search(query, cb) {
  return fetch(`api/products?q=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const searchClient = { search };
export default searchClient;