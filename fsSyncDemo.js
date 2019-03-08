const fs = require('fs');

const fileName = './test.txt';

try {
    fs.appendFileSync(fileName, 'Hello world sync');
    console.log('File was saved!');
} catch (e) {
    console.log(e);
}
