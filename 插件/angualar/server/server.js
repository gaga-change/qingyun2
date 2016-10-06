/**
 * Created by qingyun on 16/9/23.
 */
var http= require('http');
http.createServer(function (req, res) {
    res.end('haha');
}).listen(8888,function () {
    console.log('http://localhost:8888');
})