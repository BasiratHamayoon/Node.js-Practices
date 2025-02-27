const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write File
    if (req.url === '/write-file') {
        fs.writeFileSync('data.txt', 'Hello! This is my first file');
        res.end('File created successfully!');
    }

    // Read File
    else if (req.url === '/read-file') {
        if (fs.existsSync('index.txt')) {
            const data = fs.readFileSync('index.txt', 'utf8');
            res.end(data);
        } else {
            res.end('File does not exist');
        }
    }

    // Append File
    else if (req.url === '/append-file') {
        fs.appendFileSync('index.txt', '\nThis is appended content.');
        res.end('Content appended successfully!');
    }

    // Delete File
    else if (req.url === '/delete-file') {
        if (fs.existsSync('index.txt')) {
            fs.unlinkSync('index.txt');
            res.end('File deleted successfully!');
        } else {
            res.end('File does not exist');
        }
    }

    // Default response for unknown routes
    else {
        res.end('Invalid route! Use /write-file, /read-file, /append-file, or /delete-file');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
