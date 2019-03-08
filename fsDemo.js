const fs = require('fs');

const fileName = './test.txt';

fs.writeFile(fileName, 'Hello, world', err => {
    if (err) {
        console.log(err);
    } else {
        console.log('File was saved!');
    }
});
