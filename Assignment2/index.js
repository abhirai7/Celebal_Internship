const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  // Create File
  if (pathname === '/create' && req.method === 'GET') {
    const filePath = path.join(__dirname, query.filename || 'newfile.txt');
    fs.writeFile(filePath, query.content || '', (err) => {
      if (err) {
        res.writeHead(500);
        res.end('Error creating file');
      } else {
        res.writeHead(200);
        res.end(`File '${query.filename}' created successfully.`);
      }
    });
  }

  // Read File
  else if (pathname === '/read' && req.method === 'GET') {
    const filePath = path.join(__dirname, query.filename || '');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  }

  // Delete File
  else if (pathname === '/delete' && req.method === 'GET') {
    const filePath = path.join(__dirname, query.filename || '');
    fs.unlink(filePath, (err) => {
      if (err) {
        res.writeHead(404);
        res.end('Error deleting file');
      } else {
        res.writeHead(200);
        res.end(`File '${query.filename}' deleted successfully.`);
      }
    });
  }

  // Invalid Route
  else {
    res.writeHead(404);
    res.end('Invalid route');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});