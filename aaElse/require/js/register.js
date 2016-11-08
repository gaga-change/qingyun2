/**
 * Created by qingyun2 on 16/11/8.
 */



define(['./net'], function (request) {
    function register(name, password, email) {
        request(name, password, email);
    }

    return register;
});