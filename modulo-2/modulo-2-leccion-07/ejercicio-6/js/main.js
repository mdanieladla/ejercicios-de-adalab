'use strict'

const btn = document.querySelector('.js-btn');

const inputMovie = document.querySelector('.js-movie');

const inputBook = document.querySelector('.js-book');

const favs = [];

function shareInfo() {
    favs[0] = inputMovie.value;
    favs[1] = inputBook.value;
    
    console.log(favs);

    for (const fav of favs) {
        console.log(`A mi también me encantó ${fav}. Tenemos mucho en común!`);
    }
}

btn.addEventListener('click', shareInfo);