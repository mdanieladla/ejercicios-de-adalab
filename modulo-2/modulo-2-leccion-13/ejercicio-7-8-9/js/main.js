'use strict'

//EJERCICIO 7:
const times = [56, 9, 45, 28, 35];

let result = times.reduce((x,y) => x+y, 0);

const media = result / times.length;

//EJERCICIO 8:
const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 35 }
  ];
//1er param : valor que quiero retornar
//2oparam: cada una de las posciones del array
  const winner = runners.reduce((elmtToCompare,currentTime) => {
    if(elmtToCompare.time < time.time) {
      return elmtToCompare;
    } else {
      return time
    }
  }  );
  console.log(winner);

  //EJERCICIO 9:
  const runners = [
    { name: 'Gregory Goyle', time: 56, student: true },
    { name: 'Nymphadora Tonks', time: 9, student: false },
    { name: 'Luna Lovegood', time: 45, student: true },
    { name: 'Cedric Diggory', time: 28, student: true },
    { name: 'Cho Chang', time: 35, student: true }
  ];

  const students = runners.filter(name => name.student === true).reduce((studentsToCompare, currentTime) => {
    if(studentsToCompare.time < currentTime.time) {
      return studentsToCompare;
    } else {
      return currentTime
    }
  });