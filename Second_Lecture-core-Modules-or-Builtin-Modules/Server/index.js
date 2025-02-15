const http = require("http");
const url = require("url");

const server = http.createServer((request, response) => {
    const method = request.method;
    const path = url.parse(request.url, true);

    // console.log(`Request received: ${method} ${path.pathname}`);

    if (method === "GET" && path.pathname === "/") {
        response.end(JSON.stringify({ hello: "world" }));
    } else if (method === "POST" ) {

    }
    else {
        response.end(JSON.stringify({ error: "Path not found!" }));
    }
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
