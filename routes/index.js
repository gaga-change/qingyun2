var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/app', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    var myUrl = req.param('myUrl');
    var callback = req.param('callback');
    // console.log(myUrl);
    // console.log(req.url);
    // app.request(myUrl);
    console.log(myUrl);
    http.get(myUrl,function (response) {
        // console.log(res);
        response.setEncoding('utf8');
        var data="";
        response.on('data', function (result) {
            data += result;
        });
        response.on('end', function () {
            // console.log(data);
            res.send(callback+'('+data+')' );
        })
    });


});

module.exports = router;
