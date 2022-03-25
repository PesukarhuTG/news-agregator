import getData from './getData.js';
import designSelect from './designSelect.js';

const newsList = document.querySelector('.news-list');
const title = document.querySelector('.title');

const getCorrectDateFormat = isoDate => {
  const date = new Date(isoDate);
  const fullDate = date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const fullTime = date.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `<span class="news-date">${fullDate}</span> ${fullTime}`;
};

export const renderCard = (data) => {
  newsList.textContent = '';

  data.forEach(news => {
    const { urlToImage, title, url, description, publishedAt, author } = news;

    const card = document.createElement('li');
    card.className = 'news-item';

    card.innerHTML = `
        <img class="news-image" src="${urlToImage ? urlToImage : './assets/img/poster.jpg'}"
            alt="${title}" width="270" height="140">
        <h3 class="news-title">
              <a href="${url}" class="news-link" target="_blank">${title || ''}</a>
        </h3>
        <p class="news-description">${description || ''}</p>
        <div class="news-footer">
            <time class="news-datetime" datetime="${publishedAt}">
                ${getCorrectDateFormat(publishedAt)}
            </time>
            <div class="news-author">${author || ''}</div>
        </div>
    `;

    newsList.append(card);
  })
}

export const loadNews = async () => {
  newsList.innerHTML = '<li class="preload"></li>';
  title.classList.add('hide');

  const country = localStorage.getItem('country') || 'ru';

  const choiceCity = designSelect();
  choiceCity.setChoiceByValue(country);

  const data = await getData(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=50`);
  renderCard(data.articles);
}