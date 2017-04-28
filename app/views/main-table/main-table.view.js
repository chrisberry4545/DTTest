'use strict';

angular.module('dtTestApp.mainTable', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/maintable', {
    templateUrl: 'views/main-table/main-table.view.html',
    controller: 'MainTableViewController'
  });
}])

.controller('MainTableViewController', [function() {

}]);