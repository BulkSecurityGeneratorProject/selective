(function() {
    'use strict';

    angular
        .module('selectiveApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('logs', {
            parent: 'ops',
            url: '/logs',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'Logs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/admin/logs/logs.html',
                    controller: 'LogsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
