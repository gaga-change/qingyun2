/**
 * Created by qingyun on 16/9/28.
 */

angular.module('myApp.Services', [])
    .factory('MyFactory', ['$http', function ($http) {
        return {
            attr: "属性",
            fn: function () {
                console.log('方法');
            }
        }
    }])
    .provider("Login", function () {
        // this.$get = function () {
        //     return {
        //         info : 'MyProvider2 创建的'
        //     }
        // }
        var username = 'admin';
        var password = 'pass';
        return {
            setUsername: function (str) {
                if (str) {
                    username = str;
                }
            },
            setPassword: function (str) {
                if (str) {
                    password = str;
                }
            },
            $get: function () {
                return{
                    username : username,
                    password : password
                }
            }
        }
    })
    .service('MyService', ['$http', function ($http) {
        this.attr = '属性',
            this.fu = function () {
                console.log('方法');
            }
    }]);