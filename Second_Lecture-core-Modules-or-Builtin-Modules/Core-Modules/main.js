const fs = require('fs');

//Write File

// fs.writeFileSync('index.txt', 'Hello! this is my first file');

//Read file

fs.readFile('index.txt', 'utf8', (error, data) => {
    console.log(data);
        
});

