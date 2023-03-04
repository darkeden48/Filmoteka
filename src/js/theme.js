const themeBtn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const titles = document.getElementsByTagName('h2');
const card = document.querySelector('.film_modal');

const theme = localStorage.getItem('theme');
themeBtn.addEventListener('click', themeBtnClick);
console.log(titles);
themeChange(theme);
console.log(titles);
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
    console.log('adf');
    body.classList.add('dark_theme');
    card.classList.add('dark_modal');
    for (let index = 0; index < titles.length; index++) {
      console.log(titles);
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
