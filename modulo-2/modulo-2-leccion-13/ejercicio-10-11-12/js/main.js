'use strict'

//EJERCICIO 10:
//a) Encontrar el usuario que corresponde al PIN 5232:
const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
  ];

  const incidence = users.find(pinNumber => pinNumber.pin === 5232);

  console.log(incidence);

//b) Borrar el usuario del array.

  const deleteUser = users.findIndex(name => name.name === 'Rocío');

  console.log(deleteUser);

  const activeUsers = users.splice(3,1);

  console.log(users);
  console.log(activeUsers);

//EJERCICIO 11:
const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 }
];

runners.sort((a,b) => a.time - b.time);

//EJERCICIO 12:
const users2 = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

//Por orden alfabético
users2.sort((a,b) => a.name - b.name);

//Por PIN:
//users2.sort((a,b) => a.pin - b.pin);