// console.log("Hello World");

// Creatig A Server

const http = require("http");

const server = http.createServer((request, response) => {
    const method = request.method;
    const url = response.url;

    if(method == "GET"){
        response.end("Hello Welcome to the Node.js Server!")
    }
})

server.listen(4000)