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

        $scope.displayedDeals = $scope.allDeals;

        var numberOfFiltersActivated = 0;
        for(var productType in $scope.filterModel.productTypes) {
            if ($scope.filterModel.productTypes[productType].value) {
                numberOfFiltersActivated++;
            }
        }

        if (numberOfFiltersActivated) {

            $scope.displayedDeals = $scope.allDeals.filter(function(deal) {
                var dealMeetsAllCriteria = true;

                if (deal.productTypes.length - 1 !== numberOfFiltersActivated) { //Phone is never included
                    // If the number of filters selected doesn't match the product types of the deal it shouldn't be included
                    return false;
                }
                
                for (var possibleProductType in $scope.filterModel.productTypes) {
                    if (
                        $scope.filterModel.productTypes[possibleProductType].value 
                        && deal.productTypes.indexOf(possibleProductType) === -1
                    ) {
                        dealMeetsAllCriteria = false;
                    }
                }

                return dealMeetsAllCriteria;
            });

        }

        if ($scope.filterModel.speed.selected != null && $scope.filterModel.speed.selected !== anySpeed) {
            $scope.displayedDeals = $scope.displayedDeals.filter(function(deal) {
                return deal.speed.label === $scope.filterModel.speed.selected;
            });
        }

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

            $scope.filterModel.speed.possibleSpeeds = [anySpeed];
            $scope.filterModel.speed.possibleSpeeds = $scope.filterModel.speed.possibleSpeeds.concat(utilitiesService.generateUniqueArray($scope.allDeals.map(function(deal) {
                return deal.speed.label;
            })).sort());

        });
        
    }

    init();

}]);