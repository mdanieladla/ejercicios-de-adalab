'use strict'

const select = document.querySelector('.js-select');

let inputName = document.querySelector('.js-name');

let inputLastName = document.querySelector('.js-lastname');

let inputPhone = document.querySelector('.js-phone');

const info = [
    {
        name: 'Thor',
        lastName: 'De Asgard',
        telephone: 3829384723
    },
    {
        name: 'Wanda',
        lastName: 'Escarlata',
        telephone: 265849273
    },
    {
        name: 'Natasha',
        lastName: 'Romanoff',
        telephone: 474826392
    }
]

function handleClickOption(){
    if(select.value === 'Thor') {
        inputName.value = info[0].name;
        inputLastName.value = info[0].lastName;
        inputPhone.value = info[0].telephone;
    } else if(select.value === 'Wanda') {
        inputName.value = info[1].name;
        inputLastName.value = info[1].lastName;
        inputPhone.value = info[1].telephone;
    } else if(select.value === 'Natasha'){
        inputName.value = info[2].name;
        inputLastName.value = info[2].lastName;
        inputPhone.value = info[2].telephone;
    }
}

select.addEventListener('change', handleClickOption);

function paintInfo() {
    handleClickOption();
}