/**
 * Created by jundong on 16/10/9.
 */
'use strict';

console.log('app.config.js');

angular.module('myApp')
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            
            $routeProvider
                .when('/list', {
                    template: '<list></list>'
                })
                .when('/bds', {
                    template: "<bds></bds>"
                })
                .otherwise('/list');
        }]);