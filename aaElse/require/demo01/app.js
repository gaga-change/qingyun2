/**
 * Created by qingyun2 on 16/11/13.
 */

require.config({
    baseUrl: "lib",
    paths: {
        app: '../js/app'
    }
});

// requirejs(['jquery', "app/test"], function ($, config) {
//    console.log($);
//     console.log(config);
// });
console.log('我先加载');
requirejs(['app/test', 'jquery.min'], function (test, $) {
    console.log('jquery.min.js');
    console.log("最后运行");
    console.log($);
    // var $ =require('jquery');
    // console.log("require", require);
    // var a = require('jquery');
   // console.log(a);
    // console.log(config);
});

// define(function(require, exports, module) {
//     //If "a" has used exports, then we have a real
//     //object reference here. However, we cannot use
//     //any of "a"'s properties until after "b" returns a value.
//     var a = require("jquery");
//    console.log($);
//
// });

// requirejs(['jquery'],
//     function   ($) {
//         //jQuery, canvas and the app/sub module are all
//         //loaded and can be used here now.
//         console.log($);
//     });