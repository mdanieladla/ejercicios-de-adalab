'use strict'

const btn = document.querySelector('.js-btn');

function handleToggleBtn() {
    btn.classList.toggle('btn');
}

btn.addEventListener('click', handleToggleBtn);