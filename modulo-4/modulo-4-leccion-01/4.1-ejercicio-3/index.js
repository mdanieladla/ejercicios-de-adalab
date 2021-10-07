const fs = require('fs');
const data = require('./input-file.json');

const jsonData = JSON.stringify(data);
console.log(jsonData);
const handleFile = () => {
  jsonData;
};

fs.readFile('./input-file.json', 'utf8', handleFile);

fs.writeFile('./output-file.json', jsonData, (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('The file has been saved!');
  }
});
