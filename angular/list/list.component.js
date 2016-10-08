/**
 * Created by jundong on 16/10/8.
 */
'use strict';
 
angular.module('list').component('list',{
    templateUrl : 'list/list.template.html',
    controller : function () {
        this.test = [
            {
                name : 'a',
                age : '1'
            },{
                name : 'b',
                age : '2'
            },{
                name : 'c',
                age : '3'
            },{
                name : 'd',
                age : '2'
            }
        ]
    }
});