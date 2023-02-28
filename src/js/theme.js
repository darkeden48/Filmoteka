const themeBtn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const titles = document.getElementsByTagName('h2');
const card = document.querySelector('.film_modal');
console.dir(card);
themeBtn.addEventListener('click', lolo);

function lolo(e) {
  if (e.target.checked) {
    body.classList.add('dark_theme');
    card.classList.add('dark_modal');
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      element.classList.add('dark_theme_title');
    }
  } else {
    body.classList.remove('dark_theme');
    card.classList.remove('dark_modal');
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      element.classList.remove('dark_theme_title');
    }
  }
}

export default lolo;
