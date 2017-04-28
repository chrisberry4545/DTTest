'use strict';

describe('dtTestApp.mainTable', function() {

  beforeEach(function() {

    angular.module('dtTestApp.utilitiesService',[]);
    angular.module('dtTestApp.dealsService',[]);
    angular.module('dtTestApp.header',[]);
    angular.module('dtTestApp.filters',[]);
    module('dtTestApp.mainTable');


    module(function($provide) {
      $provide.service('dealsService', function() {
        this.getDeals = function() {
          return {
            then: function() {

            }
          }
        }
      });
      $provide.service('utilitiesService', function() {
        this.generateUniqueArray = function(array) {
            return array;
        };
      });
    });
    
  });

  describe("updateFilter", function() {
      var mainTableViewController, $scope;

      beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        mainTableViewController = $controller('MainTableViewController', {
          $scope: $scope
        });

        $scope.filterModel = {
            productTypes: {},
            speed: {}
        }
      }));
      
      describe("Given results", function() {

        beforeEach(function() {

          
          jasmine.getJSONFixtures().fixturesPath = 'base/data';

          $scope.allDeals = getJSONFixture('deals.json').deals;

        });

        describe("When filtering by Broadband", function() {

          beforeEach(function() {

            $scope.filterModel.productTypes['Broadband'] = {
                value: true
            };
            $scope.updateFilter();

          });

          it("Shows the 3 broadband deals only", function() {
              expect($scope.displayedDeals.length).toBe(3);
            $scope.displayedDeals.forEach(function(deal) {
              expect(deal.productTypes.length).toBe(2);
              expect(deal.productTypes.indexOf('Broadband') > -1).toBe(true);
            });
          });

          describe("And by Tv", function() {

            beforeEach(function() {
              $scope.filterModel.productTypes['TV'] = {
                value: true
              };
              $scope.updateFilter();
            });

            it("Shows the 2 deals for broadband and TV only", function() {
              expect($scope.displayedDeals.length).toBe(2);
              $scope.displayedDeals.forEach(function(deal) {
                expect(deal.productTypes.length).toBe(3);
                expect(deal.productTypes.indexOf('Broadband') > -1).toBe(true);
                expect(deal.productTypes.indexOf('TV') > - 1).toBe(true);
              });
            });

          });

          describe("And by mobile", function() {
            
            beforeEach(function() {
              $scope.filterModel.productTypes['Mobile'] = {
                value: true
              };
              $scope.updateFilter();
            });

            it("Shows the single deal for broadband and mobile only", function() {
              expect($scope.displayedDeals.length).toBe(1);
              $scope.displayedDeals.forEach(function(deal) {
                expect(deal.productTypes.length).toBe(3);
                expect(deal.productTypes.indexOf('Broadband') > -1).toBe(true);
                expect(deal.productTypes.indexOf('Mobile') > -1).toBe(true);
              });
            });



            describe("And by TV AND Mobile data 5GB", function() {

              beforeEach(function() {
                $scope.filterModel.productTypes['TV'] = {
                  value: true
                };
                $scope.filterModel.speed.selected = '5120';
                $scope.updateFilter();
              });

              it("Gives 0 results", function() {
                expect($scope.displayedDeals.length).toBe(0);
              });

            });

          });


          describe("And speed 52MB", function() {

            beforeEach(function() {
              $scope.filterModel.speed.selected = '52';
              $scope.updateFilter();
            });

            it("Gives 1 result", function() {
              expect($scope.displayedDeals.length).toBe(1);
            });

          });

          
          describe("And then removing the broadband filter", function() {

            beforeEach(function() {
              $scope.filterModel.productTypes['Broadband'] = {
                value: false
              };
              $scope.updateFilter();
            });

            it("Shows all 7 results again", function() {
              expect($scope.displayedDeals.length).toBe(7);
            });

          });

        });




      });
      
  });
});