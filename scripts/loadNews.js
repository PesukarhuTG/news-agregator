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

const getImage = url => new Promise((resolve) => {
  const image = new Image(270, 140);

  //image checking
  image.addEventListener('load', () => {
    resolve(image);
  });

  image.addEventListener('error', () => {
    image.src = './assets/img/poster.jpg';
    resolve(image);
  });

  image.src = url || './assets/img/poster.jpg';
  image.className = 'news-image';

  return image;
});

export const renderCard = (data) => {
  newsList.textContent = '';

  data.forEach(async news => {
    const { urlToImage, title, url, description, publishedAt, author } = news;

    const card = document.createElement('li');
    card.className = 'news-item';

    const image = await getImage(urlToImage);
    image.alt = title;
    card.append(image);

    card.insertAdjacentHTML('beforeend', `
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
`);

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