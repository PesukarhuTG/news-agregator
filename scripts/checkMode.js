window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

const themeCSS = function () {
  const style = document.createElement('link');
  style.id = 'theme-css';
  style.rel = 'stylesheet';
  style.href = `css/${localStorage.getItem('themeNews')}.css`;
  document.head.append(style);
};

if (localStorage.getItem('themeNews')) {
  themeCSS();
} else {
  localStorage.setItem('themeNews', 'light');
  themeCSS();
}