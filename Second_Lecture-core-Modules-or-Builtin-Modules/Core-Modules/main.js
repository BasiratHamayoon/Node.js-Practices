const { error } = require('console');
const fs = require('fs');
const os = require('os')

//Write File

// fs.writeFileSync('index.txt', 'Hello! this is my first file');

//Read file

// fs.readFile('index.txt', 'utf8', (error, data) => {
//     console.log(data);
        
// });

//Append File

// fs.appendFileSync("index.txt", "\n How are you?");

//Delete File

// fs.unlink('index.txt', (error) => {
//     if(error) console.log(error)
//         console.log("File Deleted")
// });

//Checking File

// if(fs.existsSync('index.txt')){
//     console.log('File Exist');
// } else {
//     console.log('File Not Found')
// }

//Create Directory

// fs.mkdir('PrentDir', (error) => {
//     if(error) console.log(error)
//         console.log("Directory Created")
// })

//Nested Directory

// fs.mkdir("PrentDir/ChildDir.js", (error) =>{
//     if(error) console.log(error)
//         console.log("child file is created");
// } )

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.userInfo())
console.log(os.hostname())
