const header = document.querySelector('.home');
const headerLibrary = document.querySelector('.library');
const linkHome = document.querySelectorAll('#home');
const linkLibrary = document.querySelectorAll('#library');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const mainLibrary = document.querySelector('.main-library');
const convenienceMenu = document.querySelector('.convenience-menu');

function onLinkHome(event) {
  headerLibrary.classList.add('invisable');
  header.classList.remove('invisable');
  mainLibrary.classList.add('invisable');
  main.classList.remove('invisable');
  convenienceMenu.style.display = 'flex';
  // body.insertBefore(main,body.firstChild);
  // body.insertBefore(header,main);
  // headerLibrary.remove();
  // mainLibrary.remove();
}
function onLinkLibrary(event) {
  headerLibrary.classList.remove('invisable');
  header.classList.add('invisable');
  mainLibrary.classList.remove('invisable');
  main.classList.add('invisable');
  convenienceMenu.style.display = 'none';
  // body.insertBefore(mainLibrary,body.firstChild);
  // body.insertBefore(headerLibrary,mainLibrary);
  // header.remove();
  // main.remove();
}

linkHome[0].addEventListener('click', onLinkHome);
linkLibrary[0].addEventListener('click', onLinkLibrary);
linkHome[1].addEventListener('click', onLinkHome);
linkLibrary[1].addEventListener('click', onLinkLibrary);
