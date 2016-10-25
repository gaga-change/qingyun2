/**
 * Created by qingyun2 on 16/10/24.
 */
angular.module('includeExample', ['ngAnimate'])
    .controller('ExampleController', ['$scope', function ($scope) {
        $scope.templates = [
            {name: 'template1.html', url: 'template1.html'},
            {name: 'template2.html', url: 'template2.html'}
        ]
    }]);