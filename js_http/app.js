const http = require('http');
const url = require('url');
const fs = require('fs');

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true);
    const filename = '.' + query.pathname;
    console.log(filename);
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        return res.end('404 not found');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
    const RandomStuff = JSON.stringify([
      {
        Nome: 'i dunno',
        Idade: '209',
        Altura: '1.90',
      },
    ]);

    fs.writeFile('newJson.json', RandomStuff, 'utf8', (err) => {
      if (err) throw err;
      console.log('Arquivo criado');
    });
  })
  .listen(8080, 'localhost', () => {
    console.log('server running...');
  });

//localhost:8080/winter.html
