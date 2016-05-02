(function() {
  angular.module('PlayList')
    .config(function($stateProvider) {
      $stateProvider
        .state('playlist', {
          url: '/playlists/:playlistId',
          templateUrl: 'modules/playlist/playlist.tpl.html',
          controller: 'PlayListCtrl',
          controllerAs: 'vm'
        })

          .state('playlist.addSong', {
            url: '/addSong',
            templateUrl: 'modules/playlist/addSong/addSong.tpl.html',
            controller: 'AddSongCtrl',
            controllerAs: 'vm'
          });
    });
})();
