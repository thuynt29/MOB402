var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('buoi1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("start");
    res.write(data);
    console.log("end");

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


    res.end();
  });
}).listen(8080);