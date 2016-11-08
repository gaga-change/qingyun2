/**
 * Created by qingyun2 on 16/11/8.
 */



define(function () {
    var request = function () {
        console.log('去请求', [].concat.apply(null, arguments));
    };
    return request;
});