const signInBtn = document.querySelector('#sign-in-button');
const signUpBtn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

signUpBtn.addEventListener('click', ()=>{
    container.classList.add('sign-up-mode');
});

signInBtn.addEventListener('click', ()=>{
    container.classList.remove('sign-up-mode');
});