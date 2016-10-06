/**
 * Created by qingyun on 16/9/28.
 */

angular.module("myApp",['myApp.Services'])
    .value('gaga','gaga1')
    .config(['$provide','$injector','LoginProvider','gagaProvider',function ($provide, $injector,LoginProvider,gagaProvider) {
        //value , factory ,service ,provider , contant 服务都是由内置服务 $provide创建出来的
        console.log(LoginProvider);
        // gaga=LoginProvider;
        console.log(gagaProvider);
        LoginProvider.setUsername('yan');
        LoginProvider.setPassword('123');

        console.log("$provide",$provide);
        $provide.provider('MyProvider',function () {
            this.$get  = function () {
                return {
                    attr: '属性',
                    fn : function () {
                        console.log('方法')
                    },
                    info : "provider 创建的"

                }
            }
        })
    }])
    .controller('firstController',['$scope','MyFactory','MyService','MyProvider',function ($scope , MyFactory,MyService,MyProvider) {
        console.log("first");
        console.log(MyFactory);
        console.log(MyService);
        console.log(MyProvider);

    }])
    .controller('secondController',['$scope','MyFactory','MyService','Login','gaga',
        function ($scope , MyFactory,MyService,Login,gaga) {
        console.log("second");
        console.log(MyFactory);
        console.log(MyService);
        console.log('login',Login);
        console.log('gaga',gaga);
        // console.log(LoginProvider);

    }]);