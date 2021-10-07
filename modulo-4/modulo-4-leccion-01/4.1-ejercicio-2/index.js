const fs = require('fs');

const myObject = {
  user: 'Mari Carmen',
  email: 'mari@gmail.com',
  age: 28,
};

console.log(myObject);

const jsonData = JSON.stringify(myObject);

console.log(jsonData);

fs.writeFile('./output.txt', jsonData, (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('The file has been saved!');
  }
});
