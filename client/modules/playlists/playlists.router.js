(function() {
  angular.module('PlayLists')
    .config(function($stateProvider) {
      $stateProvider
      .state('playlists', {
          url: '/playlists',
          templateUrl: 'modules/playlists/playlists.tpl.html',
          controller: 'PlayListsCtrl',
          controllerAs: 'vm'
        });
    });
})();
