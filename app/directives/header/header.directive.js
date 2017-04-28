'use strict';


angular.module('dtTestApp.header', []).directive('broadbandheader', function() {

    return {
        templateUrl: './directives/header/header.directive.html',
        link: function($scope, element, attrs) {

            $scope.menuOpen = false;

            $scope.openMenu = function() {
                $scope.menuOpen = true;
            };

            $scope.closeMenu = function() {
                $scope.menuOpen = false;
            }

        }
    }

});