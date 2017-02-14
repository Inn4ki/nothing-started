var express = require("express");
var favicon = require('express-favicon');




var app = express();

app.use("/static", express.static("static"));
app.use(favicon(__dirname + '/static/favicon.ico'));

app.get("/", function(request, response){
    response.end("Hello World from express!");
});

app.get("/wes", function(request, response){
    response.end("Hello Wes from express!");
});

app.listen(3000, "127.0.0.1", () => {
    console.log(`Server is listening on localhost port 3000`);
});
