/**
 * Created by qingyun2 on 16/11/8.
 */

define(['./net'], function (request) {
    var login = function (name, password) {
        request(name, password);
    };

    return login;
});