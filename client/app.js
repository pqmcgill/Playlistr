(function() {
  angular.module('MyApp', [
    'ui.router',
    'TestModule'
  ]);

  angular.module('MyApp')
    .config(function($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    });
})();
