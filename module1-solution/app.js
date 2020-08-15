(function() {
    'use strict';

    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.list = '';
        $scope.msg = '';

        $scope.checkItems = function() {
            console.log('check Items');
            console.log($scope.list);
            if ($scope.list !== '') {
                var arr = $scope.list.split(',');
                var count = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] !== '')

                        count++;
                }
                if (count > 0) {
                    if (count <= 3) {
                        $scope.msg = 'Enjoy!';
                    } else if (count > 3) {
                        $scope.msg = 'Too much!'
                    }
                    $scope.fontStyle = {
                        "color": "Dark Green"
                    };
                    $scope.boxStyle = {
                        "border-color": "Dark Green"
                    };
                } else {
                    enterItems();
                }
            } else {
                enterItems();
            }
        }
        var enterItems = function() {
            $scope.msg = 'You did not enter any dishes';
            $scope.fontStyle = {
                "color": "red"
            };
            $scope.boxStyle = {
                "border-color": "red"
            };
        };
    }
})();
