'use strict';

angular.module('dtTestApp.dealsService', []).service('dealsService', function($http) {

    this.getDeals = function() {
        return $http.get('./data/deals.json').success(function(response) {
            return response;
        });
    }

});