/**
 * Created by qingyun on 16/10/7.
 */

angular.module('fruitList')
    .controller('fruitList', ['$scope', function ($scope) {
        $scope.fruits = [
            {
                id: 1,
                name: '苹果'
            }, {
                id: 2,
                name: '香蕉'
            }, {
                id: 3,
                name: '李子'
            }
        ];
        $scope.selected = $scope.fruits[0];
    }]);