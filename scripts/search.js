import getData from './getData.js';
import { renderCard } from './loadNews.js';
import declOfNum from './wordDeclinations.js';
import designSelect from './designSelect.js';

const searchNews = () => {
  const formSearch = document.querySelector('.form-search');
  const title = document.querySelector('.title');
  //const choices = document.querySelector('.choices');

  const loadSearch = async (value) => {
    const data = await getData(`https://newsapi.org/v2/everything?q=${value}&pageSize=100`);

    //show title
    title.textContent = `По вашему запросу «${value}» найдено ${declOfNum(data.articles.length, ['результат', 'результата', 'результатов'])}`;
    title.classList.remove('hide');

    //clear city select
    //const choiceCity = designSelect();
    //choiceCity.setChoiceByValue('');

    renderCard(data.articles);
  };

  formSearch.addEventListener('submit', e => {
    e.preventDefault();
    loadSearch(formSearch.search.value);
    formSearch.reset();
  })
};

export default searchNews;