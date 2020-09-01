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
              if (count == 0 ) {
            $scope.msg = "You did not enter any dishes";
        } else if (count > 3) {
            $scope.msg = " Too much!";
        } else {
            $scope.msg = " Enjoy";
        }
        return    $scope.msg ;



        }
        };
    }
})();
