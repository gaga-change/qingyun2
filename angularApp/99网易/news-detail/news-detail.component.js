/**
 * Created by jundong on 16/10/9.
 */
'use strict';

console.log('news-detail.component.js');

angular.module('newsDetail')
    .component('newsDetail', {
        templateUrl: 'news-detail/news-detail.template.html',
        controller: ['$http', '$routeParams', '$timeout', function ($http, $routeParams) {
            var self = this;
            this.test = 1;
            this.docid = $routeParams.listId;
            // window.sessionStorage.setItem('newsId', this.docid);
            // console.log(this.docid);
            $http({
                method: 'POST',
                url: '/getJson',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: 'myUrl=http://c.m.163.com/nc/article/' + this.docid + '/full.html'
            }).then(function (req) {
                var data = req.data;
                for (var p in data) {
                    data = data[p];
                }
                console.log(data);
                self.data = data;
                insert(data);
            })
        }]
    });


function insert(data) {
    // console.log('insert');
    var si = setInterval(function () {
        if (document.querySelector('[data-id=body]')) {
            clearTimeout(si);
            console.log(document.querySelector('[data-id=body]'));
            document.querySelector('[data-id=body]').innerHTML = data.body;
            // console.log(data);
        }
    }, 100);

}
