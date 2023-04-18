import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';

// Registration
const registerForm = document.querySelector('#registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Input Values
    let username = document.querySelector('#registerUsername').value;
    let email = document.querySelector('#registerEmail').value;
    let password = document.querySelector('#registerPassword').value;
    let repeatPassword = document.querySelector('#registerRepeatPassword').value;
    let error = document.querySelector('#registerError');

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

// Sign in
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Input Values
    let email = document.querySelector('#loginEmail').value;
    let password = document.querySelector('#loginPassword').value;
    let error = document.querySelector('#loginError');

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Signed in
            document.querySelector('#home').click();
            error.style.removeAttribute('style');
            console.log(userCredential.user);
            
            // Clear data
            registerForm.reset();
            error.removeAttribute('style');
        })
        .catch(err => {
            error.style.display = 'block';
            error.innerHTML = err.message;
        });
})