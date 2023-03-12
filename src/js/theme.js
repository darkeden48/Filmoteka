const themeBtn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const titles = document.getElementsByTagName('h2');
const card = document.querySelector('.film_modal');

const theme = localStorage.getItem('theme');
themeBtn.addEventListener('click', themeBtnClick);
themeChange(theme);

function themeBtnClick() {
  if (themeBtn.checked === true) {
    localStorage.setItem('theme', 'dark');
    themeChange('dark');
  } else if (themeBtn.checked === false) {
    localStorage.setItem('theme', 'light');
    themeChange('light');
  }
}

function themeChange(theme) {
  if (theme === 'dark') {
    body.classList.add('dark_theme');
    card.classList.add('dark_modal');
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      element.classList.add('dark_theme_title');
    }
    themeBtn.checked = true;
  } else if (theme === 'light') {
    body.classList.remove('dark_theme');
    card.classList.remove('dark_modal');
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      element.classList.remove('dark_theme_title');
    }
    themeBtn.checked = false;
  }
}

export default themeChange;
