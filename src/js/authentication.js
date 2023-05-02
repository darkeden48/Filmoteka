import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
    signOut, signInWithRedirect, getRedirectResult, GoogleAuthProvider
} from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../../firebase.config';
import { hideSpinner, showSpinner } from './spinner';
import { sendNotification } from './notification';

// Registration
const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Input Values
    const username = document.querySelector('#registerUsername').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;
    const repeatPassword = document.querySelector('#registerRepeatPassword').value;
    const error = document.querySelector('#registerError');

    if (password === repeatPassword) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                signOut(auth);
                // Redirect to login form
                document.querySelector('#login').click();

                // Clear data
                registerForm.reset();
                error.removeAttribute('style');
            })
            .catch(err => {
                error.style.display = 'block';
                error.innerHTML = err.message;
            });
        return
    }
    error.style.display = 'block';
    error.innerHTML = 'Your password and confirmation password do not match.';
});

// Sign in with email and password
const loginForm = document.querySelector('#loginForm');
const error = document.querySelector('#loginError');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Input Values
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed in
            document.querySelector('#home').click();
            sendNotification('success', 'You have successfully logged in.');

            // Clear data
            registerForm.reset();
            error.removeAttribute('style');
        })
        .catch(err => {
            error.style.display = 'block';
            error.innerHTML = err.message;
            sendNotification('error', 'An error occurred while logging in.');
        });
});

// Sign in with Google
const signInWithGoogle = document.querySelector('#googleLogin');
signInWithGoogle.addEventListener('click', async () => {
    await showSpinner(); // Wait for a response from redirected page
    await signInWithRedirect(auth, googleProvider);
    getRedirectResult(auth)
        .then(response => {
            // UNNECESSARY CODE AS LOGN AS FILMOTEKA DOESN'T HAVE ROUTES YET
            sendNotification('success', 'You have successfully logged in.');
            if (response.user || auth.currentUser) {
                hideSpinner();
                error.removeAttribute('style');
                loginForm.reset();
            } else {
                hideSpinner();
                sendNotification('error', 'An error occurred while logging in.');
                document.querySelector('#login').click();
            }
        }).catch(err => {
            document.querySelector('#login').click();
            error.style.display = 'block';
            error.innerHTML = err.message;
        });
});

// Sign in with GitHub (need to handle manually)
const signInWithGitHub = document.querySelector('#githubLogin');
signInWithGitHub.addEventListener('click', (e) => {
    e.preventDefault();
    showSpinner();
    signInWithPopup(auth, githubProvider)
        .then(result => {
            hideSpinner();
            sendNotification('success', 'You have successfully logged in.');
            // Redirect user after login & clear the form
            document.querySelector('#home').click();
            error.removeAttribute('style');
            loginForm.reset();
        }).catch((err) => {
            hideSpinner();
            sendNotification('error', 'An error occurred while logging in.');
            error.style.display = 'block';
            if (err.code === 'auth/account-exists-with-different-credential') {
                error.innerHTML = 'This email is already in use. Try to sign in with a different method.';
            } else if (err.code === 'auth/popup-closed-by-user') {
                error.removeAttribute('style');
            } else {
                error.innerHTML = err.message;
            }
        });
});