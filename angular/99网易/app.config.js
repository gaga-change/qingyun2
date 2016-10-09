/**
 * Created by jundong on 16/10/9.
 */
'use strict';

console.log('app.config.js');

angular.module('wyApp')
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/list', {
                    template: '<news-list></news-list>'
                })
                .when('/list/:listId', {
                    template: '<news-detail></news-detail>'
                })
                .otherwise('/list')
        }]);