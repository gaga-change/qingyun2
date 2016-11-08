/**
 * Created by jundong on 16/10/8.
 */
'use strict';

console.log('list.component.js');

angular.module('list').component('list',{
    templateUrl : '00list/list.template.html',
    controller : function ($http) {
        var self = this;
        $http.get('/list.json').then(function (res) {
            self.list = res.data;
        });
    }
});