const changeMode = function () {
  const modeBtn = document.querySelector('.mode');
  const iconModeSet = document.querySelector('.icon-mode-set');
  const iconLogo = document.querySelectorAll('.icon-svg-logo');

  let themeNews = localStorage.getItem('themeNews') ? localStorage.getItem('themeNews') : 'light';
  changeTheme();

  function setLocalStorageTheme() {
    localStorage.setItem('themeNews', themeNews);
  }

  function changeTheme() {
    if (themeNews === 'light') {
      document.documentElement.style.setProperty('--font-color', '#212121');
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--second-font-color', '#8e8e8e');
      document.documentElement.style.setProperty('--border-color', '#e6e6e6');

      iconModeSet.setAttribute('href', 'assets/img/sprite.svg#icon-dark-mode');

      iconLogo.forEach(logo => {
        logo.setAttribute('href', 'assets/img/sprite.svg#logo-dark');
      });

      setLocalStorageTheme(themeNews);
      themeNews = 'dark';

    } else if (themeNews === 'dark') {
      document.documentElement.style.setProperty('--font-color', '#fff');
      document.documentElement.style.setProperty('--background-color', '#212121');
      document.documentElement.style.setProperty('--second-font-color', '#fff');
      document.documentElement.style.setProperty('--border-color', '#4c4b4b');

      iconModeSet.setAttribute('href', 'assets/img/sprite.svg#icon-light-mode');

      iconLogo.forEach(logo => {
        logo.setAttribute('href', 'assets/img/sprite.svg#logo-light');
      });

      setLocalStorageTheme(themeNews);
      themeNews = 'light';
    }
  }

  modeBtn.addEventListener('click', () => {
    changeTheme();
  });

};

export default changeMode;