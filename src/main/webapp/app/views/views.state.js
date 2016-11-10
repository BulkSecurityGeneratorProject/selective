(function (angular) {
    'use strict';
    
    angular
        .module('selectiveApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('views', {
            abstract: true,
            parent: 'app'
        })
    }
})(angular);
