import { getNews } from './getData.js';

const newsList = document.querySelector('.news-list');

const renderCard = (data) => {
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

const loadNews = async () => {
  const data = await getNews();
  renderCard(data.articles);
}

export default loadNews;