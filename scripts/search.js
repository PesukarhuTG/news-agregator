import getData from './getData.js';
import { renderCard } from './loadNews.js';

const searchNews = () => {
  const formSearch = document.querySelector('.form-search');

  const loadSearch = async (value) => {
    const data = await getData(`https://newsapi.org/v2/everything?q=${value}`);
    renderCard(data.articles);
  };

  formSearch.addEventListener('submit', e => {
    e.preventDefault();
    loadSearch(formSearch.search.value);
    formSearch.reset();
  })
};

export default searchNews;