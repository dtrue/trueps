/**
 * @author Dan True
 */

var http = require('http');
 
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello world this is dtrue\n");
});
 
server.listen(process.env.PORT || 8001);