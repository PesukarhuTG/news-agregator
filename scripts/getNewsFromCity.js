import { loadNews } from './loadNews.js';

const getNewsFromCity = () => {
  const select = document.querySelector('.js-choice');

  /* implement download news by city choice */
  select.addEventListener('change', e => {
    const value = e.detail.value;
    localStorage.setItem('country', value);
    loadNews();
  })
};

export default getNewsFromCity;