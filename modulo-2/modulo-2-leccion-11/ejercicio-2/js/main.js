'use strict'

const info = document.querySelector('.js-search');

const btn = document.querySelector('.js-btn');


function handleGetInfo(event) {
    event.preventDefault();
    const getInfo = info.value;
    const url = 'https://swapi.dev/api/people/?search=' + getInfo;

    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.results[0].name);
        
    })
}

btn.addEventListener('click', handleGetInfo);
