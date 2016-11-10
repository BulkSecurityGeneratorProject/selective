(function () {
    'use strict';

    angular
        .module('selectiveApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();
