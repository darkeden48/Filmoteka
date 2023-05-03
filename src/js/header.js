const header = document.querySelector('.home');
const headerLibrary = document.querySelector('.library');
const linkHome = document.querySelectorAll('#home');
const linkLibrary = document.querySelectorAll('#library');
const linkLogin = document.querySelector('#login');
const linkLogout = document.querySelectorAll('.logout');
const login = document.querySelector('.login');
const linkRegister = document.querySelector('#register');
const register = document.querySelector('.register');
const filters = document.querySelector('.convenience-menu');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const mainLibrary = document.querySelector('.main-library');
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { sendNotification } from './notification';
import { hideSpinner, showSpinner } from './spinner';

// Auth check on window load
window.addEventListener('load', async () => {
  await showSpinner();
  onAuthStateChanged(auth, user => {
    hideSpinner();
    if (user !== null) {
      // User is signed in
      sessionStorage.setItem('uid', user.uid);
      linkLibrary[0].parentNode.classList.remove('invisible');
      linkLibrary[1].parentNode.classList.remove('invisible');
      linkLogin.classList.add('invisible');
      linkLogout[0].classList.remove('invisible');
      linkLogout[1].classList.remove('invisible');
    } else {
      // User is signed out
      linkLibrary[0].parentNode.classList.add('invisible');
      linkLibrary[1].parentNode.classList.add('invisible');
      linkLogin.classList.remove('invisible');
      linkLogout[0].classList.add('invisible');
      linkLogout[1].classList.add('invisible');
    }
  });
});

function onRegister() {
  register.classList.remove('invisible');
  login.classList.add('invisible');
  main.classList.add('invisible');
  filters.classList.add('invisible');
}
function onLogin() {
  login.classList.remove('invisible');
  register.classList.add('invisible');
  main.classList.add('invisible');
  filters.classList.add('invisible');
}
function onLogout() {
  signOut(auth).then(() => {
    sessionStorage.removeItem('uid');
    onLinkHome();
    sendNotification('success', 'You have successfully logged out.');
  });
}
function onLinkHome() {
  headerLibrary.classList.add('invisible');
  header.classList.remove('invisible');
  mainLibrary.classList.add('invisible');
  main.classList.remove('invisible');
  register.classList.add('invisible');
  login.classList.add('invisible');
  filters.classList.remove('invisible');
}
function onLinkLibrary() {
  headerLibrary.classList.remove('invisible');
  header.classList.add('invisible');
  mainLibrary.classList.remove('invisible');
  main.classList.add('invisible');
  register.classList.add('invisible');
  login.classList.add('invisible');
  filters.classList.add('invisible');
}

// Header -> Home
linkHome[0].addEventListener('click', onLinkHome);
linkHome[1].addEventListener('click', onLinkHome);
// Library Header -> Home
linkLibrary[0].addEventListener('click', onLinkLibrary);
linkLibrary[1].addEventListener('click', onLinkLibrary);
// Sign in form
linkLogin.addEventListener('click', onLogin);
// Sign up form
linkRegister.addEventListener('click', onRegister);
// Logout
linkLogout[0].addEventListener('click', onLogout);
linkLogout[1].addEventListener('click', onLogout);
