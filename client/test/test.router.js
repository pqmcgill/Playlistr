(function() {
  angular.module('TestModule')
    .config(function($stateProvider) {
      $stateProvider
        .state('test', {
          url: '/test',
          templateUrl: 'test/test.tpl.html',
          controller: 'TestCtrl',
          controllerAs: 'vm'
        });
    });
})();
