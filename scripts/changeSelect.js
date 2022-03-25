import loadNews from './loadNews.js';

const changeSelect = function () {
  const select = document.querySelector('.js-choice');

  /* implement Choice plugin */
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });

  /* implement city choice */
  select.addEventListener('change', e => {
    const value = e.detail.value;
    loadNews(value);

    localStorage.setItem('country', value);
  })
};

export default changeSelect;
