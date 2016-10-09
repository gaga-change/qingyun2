/**
 * Created by jundong on 16/10/9.
 */
'use strict';

console.log('app.config.js');

angular.module('myApp')
    .config(['$locationProvider', '$routeProvider', '$httpProvider',
        function ($locationProvider, $routeProvider, $httpProvider) {
            $locationProvider.hashPrefix('!');

            console.log($httpProvider.get);

            $routeProvider
                .when('/list', {
                    template: '<list></list>'
                })
                .when('/bds', {
                    template: "<bds></bds>"
                })
                .otherwise('/list');
        }]);