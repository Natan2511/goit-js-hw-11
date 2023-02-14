const axios = require('axios').default

// Fetch images from Pixabay API using Axios

async function fetchImg(name, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '32372176-cc8c36cdf5846484fc1786588';

  try {
    const response = await axios.get(
      `${baseURL}?q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}&key=${key}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImg };
