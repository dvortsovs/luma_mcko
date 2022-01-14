const http = require('http');
const fs = require('fs').promises;

const host = '192.168.64.15';
const port = 8000;

const requestListener = function (req, res) {
  fs.readFile(__dirname + '/dist/index.html')
    .then((contents) => {
      switch (req.url) {
        case '/':
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(contents);
          break;
        case '/main.css':
          res.setHeader("Content-Type", "text/css");
          res.writeHead(200);
          fs.readFile(__dirname + '/dist/main.css')
            .then(content => res.end(content))
          break;
        case '/main.js':
          res.setHeader("Content-Type", "text/javascript");
          res.writeHead(200);
          fs.readFile(__dirname + '/dist/main.js')
            .then(cont => res.end(cont))
      }
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    })
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})
