const http = require('http');
var url = require('url');

const port = 3000;
const host = 'localhost';

const requestFunction = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/chup') {
    res.writeHead(200);
    res.end(`{"message": "Json request"}`);
  } else {
    res.writeHead(400);
    res.end(`{"message": "Bad request"}`);
  }
};

const server = http.createServer(requestFunction);
server.listen(port, host, () => {
  console.log(`Servidor rodando na porta ${port}, host ${host}`);
});

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
