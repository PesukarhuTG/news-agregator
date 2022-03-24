const changeMode = function () {
  const modeBtn = document.querySelector('.mode');
  const cssFile = document.querySelector('#theme-css');
  const iconModeSet = document.querySelector('.icon-mode-set');

  function changeIconMode() {
    if (localStorage.getItem('themeNews') === 'light') {
      iconModeSet.setAttribute('href', 'assets/img/sprite.svg#icon-dark-mode');
    } else if (localStorage.getItem('themeNews') === 'dark') {
      iconModeSet.setAttribute('href', 'assets/img/sprite.svg#icon-light-mode');
    }
  }

  function setLocalStorageTheme(mode) {
    localStorage.setItem('themeNews', mode);
  }

  function changeTheme() {

    if (localStorage.getItem('themeNews') === 'light') {
      setLocalStorageTheme('dark');
      cssFile.href = `css/${localStorage.getItem('themeNews')}.css`;
      changeIconMode();
    } else if (localStorage.getItem('themeNews') === 'dark') {
      setLocalStorageTheme('light');
      cssFile.href = `css/${localStorage.getItem('themeNews')}.css`;
      changeIconMode();
    }
  }

  modeBtn.addEventListener('click', () => {
    changeTheme();
  });

  changeIconMode();
};

export default changeMode;