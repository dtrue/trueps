/**
 * @author Dan True
 */

var http = require('http');
 
var server = http.createServer(function (request, response) {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello \n");
});
 
server.listen(process.env.PORT || 8001);