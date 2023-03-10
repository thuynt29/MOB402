const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/btvnb2.html");
});