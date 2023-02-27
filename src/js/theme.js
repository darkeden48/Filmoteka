const themeBtn = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
themeBtn.addEventListener('click', lolo);

function lolo(e) {
  if (e.target.checked) {
    body.classList.add('dark_theme');
  } else {
    body.classList.remove('dark_theme');
  }
}

export default lolo;
