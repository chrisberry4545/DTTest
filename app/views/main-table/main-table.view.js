'use strict';

angular.module('dtTestApp.mainTable', ['ngRoute', 'dtTestApp.dealsService', 'dtTestApp.utilitiesService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/maintable', {
    templateUrl: 'views/main-table/main-table.view.html',
    controller: 'MainTableViewController'
  });
}])

.controller('MainTableViewController', ['$scope', 'dealsService', 'utilitiesService', function($scope, dealsService, utilitiesService) {

    var anySpeed = 'Any';


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
                selected: anySpeed,
                possibleSpeeds: []
            }

        };
        
        
        dealsService.getDeals().then(function(response) {

            $scope.allDeals = response.data.deals;
            $scope.displayedDeals = $scope.allDeals;

            $scope.filterModel.possibleSpeeds = [anySpeed];
            $scope.filterModel.possibleSpeeds = $scope.filterModel.possibleSpeeds.concat(utilitiesService.generateUniqueArray($scope.allDeals.map(function(deal) {
                return deal.speed.label;
            })).sort());

        });
        
    }

    init();

}]);