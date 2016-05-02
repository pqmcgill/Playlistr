(function() {
  angular.module('MyApp', [
    'ui.router',
    'PlayLists',
    'PlayList'
  ]);

  angular.module('MyApp')
    .config(function($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    });
})();
