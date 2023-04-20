import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,
    signOut, signInWithRedirect, getRedirectResult, GoogleAuthProvider,
    fetchSignInMethodsForEmail
} from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../../firebase.config';

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

            // Clear data
            registerForm.reset();
            error.removeAttribute('style');
        })
        .catch(err => {
            error.style.display = 'block';
            error.innerHTML = err.message;
        });
});

// Sign in with Google
const signInWithGoogle = document.querySelector('#googleLogin');
signInWithGoogle.addEventListener('click', async () => {
    signInWithRedirect(auth, googleProvider);
    error.removeAttribute('style');
    loginForm.reset();
});

document.addEventListener('load', (e) => {
    getRedirectResult(auth)
        .then((response) => {
            // Getting the Access Token, so user can use it to access the Google API
            const credential = GoogleAuthProvider.credentialFromResult(response);
            const token = credential.accessToken;
            const user = response.user;
            console.log(credential);
        }).catch(err => {
            document.querySelector('#login').click();
            error.style.display = 'block';
            error.innerHTML = err.message;
        });
})

// Sign in with GitHub (need to handle manually)
const signInWithGitHub = document.querySelector('#githubLogin');
signInWithGitHub.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithPopup(auth, githubProvider)
        .then(result => {
            // Redirect user after login & clear the form
            document.querySelector('#home').click();
            error.removeAttribute('style');
            loginForm.reset();
        }).catch((err) => {
            error.style.display = 'block';
            if (err.code === 'auth/account-exists-with-different-credential') {
                error.innerHTML = 'This email is already in use. Try to sign in with a different method.';
            } else {
                error.innerHTML = err.message;
            }
        });
});