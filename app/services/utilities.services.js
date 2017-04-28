'use strict';

angular.module('dtTestApp.utilitiesService', []).service('utilitiesService', function($http) {

    this.generateUniqueArray = function(array) {
        return array.filter(function(elem, pos,arr) {
            return arr.indexOf(elem) == pos;
        });
    }

});