/**
 * Created by jundong on 16/10/13.
 */
'use strict';

angular.module('myApp', [])
    .controller('MyController', ['$scope', function () {
        this.name = 'yan';
        this.age = '22';
        this.gender = '大牛';
    }])
    .directive('myDirective', function () {
        return {
            restrict: "A",
        }
    });