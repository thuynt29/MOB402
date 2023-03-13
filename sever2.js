// const express = require("express");
// const app = express();

// app.listen(8080, () => {
//   console.log("Application started and Listening on port 3000");
// });

// app.use(express.static(__dirname));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/btvnb2.html");
// });
var http = require('http');
var url = require('url');
var utils = require('./utils.js');

function tinhThuong(a,b){
    if(typeof a=="number" && typeof b == "number"){
        return "thuong 2 so la : "+ (a/b);
    }else if (typeof a!= 'number'){
        return "so" + a + "khong hop le";
    }else if (typeof b!= 'number'){
        return "so" + b + "khong hop le";
    }    

}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;

  
  res.write(req.url);
  res.write(txt);
  res.write("tong 2 so 6 + 7 ="+ utils.tinhtong(6,7) + '\n');
  res.write(utils.showInfor('ngay 10/3/2023'+"\n"));
  res.write("thuong 2 so 6 / 3 ="+ tinhThuong(6,3));

  res.end();
}).listen(8080);