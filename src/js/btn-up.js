const buttonUp = document.querySelector('.btn-up');

function setScrollUp() {
     window.scrollTo({
     top:0,
     left:0,
     behavior: "smooth"})
}

buttonUp.addEventListener('click', setScrollUp);