var http = require("http");
var static = require("./static/static.js");
static = require("./static.js");


/* THIS IS 3rd TIME*/


http.createServer(function webRequestHandler(request, response){
    console.log(`Incoming request: ${request.url}`);

    if(static.canHandleRequest(request)){
        static.serveStaticAsset(request, response);
        return;
    }

    response.end("Hello World!");

}).listen(3000,"127.0.0.1", () => {
    console.log(`Server is listening on localhost port 3000`);
});
