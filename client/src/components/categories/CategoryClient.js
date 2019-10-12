//container component that hits the rails API and returns a list of all categories

function getCategories(cb) {
  return fetch(`api/categories`, {
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

const CategoriesClient = { getCategories };
export default CategoriesClient;