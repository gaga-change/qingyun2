/**
 * Created by jundong on 16/10/9.
 */
'use strict';

console.log('news-list.component.js');

angular.module('newsList')
    .component('newsList', {
        templateUrl: 'news-list/news-list.template.html',
        controller: ['$http', function ($http) {
            var self = this;
            this.test = 'test';
            $http({
                    method: 'POST',
                    url: '/getJson',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: 'myUrl=http://c.m.163.com/nc/article/headline/' +
                    'T1348647853363/0-10.html'
                    // data: 'myUrl=http://3g.163.com/ntes/16/1009/10/C2U78IND00238087.html'
                    // data: 'myUrl=http://news.163.com/16/1009/10/C2U9JOR30001124J.html'
                }
            ).then(function success(req) {
                var data = req.data;
                // console.log(data);
                for(var i in data){
                    data = data[i];
                }
                self.newsRotate = data.shift();
                self.news = data;
                console.log(self.newsRotate);
                console.log(self.news);
            });
        }]
    });
