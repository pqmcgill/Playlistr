(function() {
  angular.module('PlayLists')
    .controller('PlayListsCtrl', PlayListsCtrl);

  function PlayListsCtrl() {
    var vm = this;

    vm.playlists = [
      {
        name: 'my playlist',
        id: 12345
      },
      {
        name: 'super awesome playlist',
        id: 54321
      },
      {
        name: 'wut, playlist?',
        id: 23451
      }
    ];
  }

})();
