(function() {
  angular.module('PlayList')
    .controller('AddSongCtrl', AddSongCtrl);

  function AddSongCtrl($stateParams) {
    var vm = this;

    vm.playlistId = $stateParams.playlistId;
  }

})();
