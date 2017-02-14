var fs = require("fs");

function canHandleRequest(request){
    return request.url.startsWith("/static/");
}

exports.canHandleRequest = canHandleRequest;

function serveStaticAsset(request, response){
    fs.readFile(request.url.substr(1), function callback(error, data) {
        if(error){
            console.log("Error: file not found " + error);
            response.statusCode = 404;
            response.end();
            return;
        }

        response.end(data);
        console.log("end of callback");
    });
    console.log("end of serveStaticAsset");
}

exports.serveStaticAsset = serveStaticAsset;
