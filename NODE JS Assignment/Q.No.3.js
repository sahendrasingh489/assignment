// File: server.js

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Check the request URL
    if (req.url === '/') {
        // Respond with "Hello, World!" for the root route
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    } else {
        // Respond with "Page Not Found" for any other route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found\n');
    }
});

// Define the port and start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
