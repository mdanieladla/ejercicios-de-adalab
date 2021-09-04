'use strict'

const searchBtn = document.querySelector('.js-btn');

function getInfoAboutOrgname(orgname) {
    fetch(`https://api.github.com/orgs/${orgname}`)
    .then(response => response.json())
    .then(data => {
        let info = document.querySelector('.js-info');
        info = data.message;
    })
}

searchBtn.addEventListener('click', getInfoAboutOrgname);