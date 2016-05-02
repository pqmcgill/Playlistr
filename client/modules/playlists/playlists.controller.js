(function() {
  angular.module('PlayLists')
    .controller('PlayListsCtrl', PlayListsCtrl);

  function PlayListsCtrl() {
    var vm = this;

    vm.playlists = [
      'playlistA',
      'playlistB'
    ];
  }

})();
