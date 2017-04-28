'use strict';

angular.module('dtTestApp.mainTable', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/maintable', {
    templateUrl: 'views/main-table/main-table.view.html',
    controller: 'MainTableViewController'
  });
}])

.controller('MainTableViewController', ['$scope', function($scope) {

    $scope.updateFilter = function() {

    };

    function init() {

        $scope.allDeals = [];
        $scope.displayedDeals = [];

        $scope.filterModel = {

            productTypes: {
                'Broadband': {
                    label: 'Broadband',
                    value: false
                },
                'TV': {
                    label: 'TV',
                    value: false
                },
                'Mobile': {
                    label: 'Mobile',
                    value: false
                }
            },

            speed: {
                selected: 'Any',
                possibleSpeeds: []
            }

        };
        
        // Get Data from service and put in the correct place in the above variables
        
    }

    init();

}]);