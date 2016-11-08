/**
 * Created by qingyun2 on 16/11/8.
 */

define(["./login", "./register"], function (login, register) {
    function run() {
        // console.log(login);
        // console.log(register);
        var loginEle = document.querySelector('[data-id = login]');
        var registerEle = document.querySelector('[data-id = register]');
        loginEle.addEventListener('click', function () {
            login("1", "1");
        });
        registerEle.addEventListener('click', function () {
            register("1", "1", "11@qq.com");
        });
    }
    run();
    // return run;
});