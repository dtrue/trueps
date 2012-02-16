/**
 * @author Dan True
 */

var http = require('http');
 
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" })
  response.end("Hello \n");
});
 
server.listen(process.env.PORT || 8001);