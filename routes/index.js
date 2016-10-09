var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.all('/getJson', function (req, res, next) {
    var myUrl = req.param('myUrl');
    var callback = req.param('callback') | '';
    http.get(myUrl,function (response) {
        // console.log(res);
        response.setEncoding('utf8');
        var data="";
        response.on('data', function (result) {
            data += result;
        });
        response.on('end', function () {
            // console.log(data);
            res.send(data );
        })
    });


});

module.exports = router;
