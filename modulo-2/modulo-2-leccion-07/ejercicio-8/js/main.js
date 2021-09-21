'use strict'

const btns = document.querySelectorAll('.js-btn');



function handleClickBtn() {
   for (const item of btns) {
       const btn = item;
       if (btn.classList.contains('red')) {
        btn.classList.remove('clicked');   
       } else {
        btn.classList.add('clicked');   
       }
 item.addEventListener('click', handleClickBtn);      
   }

}

handleClickBtn();