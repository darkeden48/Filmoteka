import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, signInWithRedirect, getRedirectResult,
    GoogleAuthProvider, OAuthProvider, GithubAuthProvider
} from 'firebase/auth';
import {
    auth, googleProvider,
    microsoftProvider, githubProvider
} from '../../firebase.config';

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
signInWithGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithProvider(googleProvider, GoogleAuthProvider);
});

// Sign in with GitHub
const signInWithGitHub = document.querySelector('#githubLogin');
signInWithGitHub.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithProvider(githubProvider, GithubAuthProvider);
});

// Sign in with Microsoft
const signInWithMicrosoft = document.querySelector('#microsoftLogin');
signInWithMicrosoft.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithProvider(microsoftProvider, OAuthProvider);
});

async function signInWithProvider(provider, providerCredential) {
    await signInWithRedirect(auth, provider);
    getRedirectResult(auth)
        .then(result => {
            // Getting the Access Token, so user can use it to access the Google API
            const credential = providerCredential.credentialFromResult(result);
            const token = credential.accessToken;
            // Signed in user
            const user = result.user;

            // Redirect user after login & clear the form
            console.log(token);
            document.querySelector('#home').click();
            error.removeAttribute('style');
            loginForm.reset();
        }).catch(err => {
            error.style.display = 'block';
            error.innerHTML = err.message;
        });
}