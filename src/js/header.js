const header = document.querySelector('.home');
const headerLibrary = document.querySelector('.library');
const linkHome = document.querySelectorAll('#home');
const linkLibrary = document.querySelectorAll('#library');
const linkLogin = document.querySelector('#login');
const login = document.querySelector('.login');
const linkRegister = document.querySelector('#register');
const register = document.querySelector('.register');
const filters = document.querySelector('.convenience-menu');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const mainLibrary = document.querySelector('.main-library');

function onRegister(e) {
    register.classList.remove('invisable');
    login.classList.add('invisable');
    main.classList.add('invisable');
    filters.classList.add('invisable');
}
function onLogin(e) {
    login.classList.remove('invisable');
    register.classList.add('invisable');
    main.classList.add('invisable');
    filters.classList.add('invisable');
}
function onLinkHome(event) {
    headerLibrary.classList.add('invisable');
    header.classList.remove('invisable');
    mainLibrary.classList.add('invisable');
    main.classList.remove('invisable');
    register.classList.add('invisable');
    login.classList.add('invisable');
    filters.classList.remove('invisable');
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
    register.classList.add('invisable');
    login.classList.add('invisable');
    filters.classList.remove('invisable');
    // body.insertBefore(mainLibrary,body.firstChild);
    // body.insertBefore(headerLibrary,mainLibrary);  
    // header.remove();
    // main.remove();
}

linkHome[0].addEventListener('click', onLinkHome);
linkLibrary[0].addEventListener('click', onLinkLibrary);
linkHome[1].addEventListener('click', onLinkHome);
linkLibrary[1].addEventListener('click', onLinkLibrary);
linkLogin.addEventListener('click', onLogin);
linkRegister.addEventListener('click', onRegister);