const header = document.querySelector('.home');
const headerLibrary = document.querySelector('.library');
const linkHome = document.querySelectorAll('#home');
const linkLibrary = document.querySelectorAll('#library');
const body = document.querySelector('body');
console.log(body)
function onLinkHome(event){
    headerLibrary.classList.add('invisable')
    header.classList.remove('invisable')
}
function onLinkLibrary(event){
    headerLibrary.classList.remove('invisable');
    header.classList.add('invisable');    
}

linkHome[0].addEventListener('click', onLinkHome);
linkLibrary[0].addEventListener('click', onLinkLibrary);
linkHome[1].addEventListener('click', onLinkHome);
linkLibrary[1].addEventListener('click', onLinkLibrary);
