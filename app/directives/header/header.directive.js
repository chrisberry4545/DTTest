'use strict';


angular.module('dtTestApp.header', []).directive('broadbandheader', function() {

    return {
        templateUrl: './directives/header/header.directive.html',
        link: function($scope, element, attrs) {

            $scope.menuOpen = false;

            $scope.toggleMenu = function() {
                $scope.menuOpen = !$scope.menuOpen;
            };

        }
    }

});