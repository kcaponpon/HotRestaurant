var express = require("express");

var app = express();

app.get("/", function (req, res) {
    res.send("<html><body><h1>Hello from express</h1></body></html>")
})

app.get("/food", function (req, res) {
    res.send("<html><body><h1>Hello from express</h1></body></html>")
})

app.get("/favoriteMovie", function (req, res) {
    res.send("<html><body><h1>favorite Moviess</h1></body></html>")
})
app.get("/favoriteCss", function (req, res) {
    res.send("<html><body><h1>CSS</h1></body></html>")
})

app.listen(3000, function () {
    console.log("listening");

})



