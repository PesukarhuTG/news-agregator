import getData from './getData.js';
import designSelect from './designSelect.js';

const newsList = document.querySelector('.news-list');

export const renderCard = (data) => {
  newsList.textContent = '';

  data.forEach(news => {
    const card = document.createElement('li');
    card.className = 'news-item';

    card.innerHTML = `
        <img class="news-image" src="${news.urlToImage ? news.urlToImage : './assets/img/poster.jpg'}"
            alt="${news.title}" width="270" height="140">
        <h3 class="news-title">
              <a href="${news.url}" class="news-link" target="_blank">${news.title || ''}</a>
        </h3>
        <p class="news-description">${news.description || ''}</p>
        <div class="news-footer">
            <time class="news-datetime" datetime="${news.publishedAt}">
                <span class="news-date">${news.publishedAt}</span> 11:06
            </time>
            <div class="news-author">${news.author || ''}</div>
        </div>
    `;

    newsList.append(card);
  })
}

export const loadNews = async () => {
  newsList.innerHTML = '<li class="preload"></li>';

  const country = localStorage.getItem('country') || 'ru';

  const choiceCity = designSelect();
  choiceCity.setChoiceByValue(country);

  const data = await getData(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=50`);
  renderCard(data.articles);
}