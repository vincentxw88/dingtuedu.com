const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const types = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.svg': 'image/svg+xml' };

http.createServer((request, response) => {
  const pathname = request.url === '/' ? '/index.html' : decodeURIComponent(request.url.split('?')[0]);
  const filePath = path.resolve(root, `.${pathname}`);
  if (!filePath.startsWith(root)) { response.writeHead(403).end(); return; }
  fs.readFile(filePath, (error, data) => {
    if (error) { response.writeHead(404).end('Not found'); return; }
    response.writeHead(200, { 'Content-Type': `${types[path.extname(filePath)] || 'application/octet-stream'}; charset=utf-8` });
    response.end(data);
  });
}).listen(8080, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:8080'));
