const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Y9euJuckzo9UWgNwKehaubLTU6B2HR5XzShce3VyvPqV7d9hmFU2bR02g0HBkwsG';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}