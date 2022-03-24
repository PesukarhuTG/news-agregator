const API_KEY = 'db5b2429fa90443f99bcf3ce0852cedb';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const getData = url => fetch(url, {
  headers: {
    'X-Api-Key': API_KEY,
  }
})
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw `Упс, что-то пошло не так: ${response.status}`
  })
  .catch(err => console.error(err));

export const getNews = async (country = 'ru') => {
  const url = `${BASE_URL}?country=${country}&apiKey=${API_KEY}`;
  return await getData(url);
};
