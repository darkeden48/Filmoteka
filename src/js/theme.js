const themeBtn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const titles = document.getElementsByTagName('h2');
const card = document.querySelector('.film_modal');
const footer = document.querySelector('.footer');

const theme = localStorage.getItem('theme');
themeBtn.addEventListener('click', themeBtnClick);

function themeBtnClick() {
  if (themeBtn.checked === true) {
    localStorage.setItem('theme', 'dark');
    themeChange('dark');
  } else {
    localStorage.setItem('theme', 'light');
    themeChange('light');
  }
}

function themeChange(theme) {
  if (theme === 'dark') {
    body.classList.add('dark_theme');
    card.classList.add('dark_modal');
    footer.style.backgroundColor = '#000000cf';
    footer.style.color = 'white';
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      element.classList.add('dark_theme_title');
    }
    themeBtn.checked = true;
  } else if (theme === 'light') {
    body.classList.remove('dark_theme');
    card.classList.remove('dark_modal');
    footer.style.backgroundColor = '#fff';
    footer.style.color = '#545454';
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      element.classList.remove('dark_theme_title');
    }
    themeBtn.checked = false;
  }
}

export default themeChange;
