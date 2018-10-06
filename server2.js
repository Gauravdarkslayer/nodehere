var http = require('http')
var url = require('url')

http.createServer(function(req,res)
{
    res.writehead(200,{'content-type':'text/html'})
    res.write(req.url)
    res.end();

}).listen(9999);