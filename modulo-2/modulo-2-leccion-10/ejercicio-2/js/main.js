'use strict'

function getDogImage() {
    fetch("https://dog.ceo/api/breed/malamute/images/random")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
      });
  }
  const btn = document.querySelector(".js-dog");
  btn.addEventListener("click", getDogImage);


function getMoreDogs() {
    fetch("https://dog.ceo/api/breed/beagle/images/random")
    .then(response => response.json())
    .then(data => {
        const img = document.querySelector('.js-img');
        img.src = data.message;
        img.alt = 'Más perros';
    })
}

  const btnMore = document.querySelector('.js-moredogs');
  btnMore.addEventListener('click', getMoreDogs);