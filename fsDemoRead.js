const fs = require('fs');

const fileName = './test.json';

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File contents:', JSON.parse(data))
    }
});
