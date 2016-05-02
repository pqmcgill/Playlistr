(function() {
  angular.module('PlayList')
    .controller('PlayListCtrl', PlayListCtrl);

  function PlayListCtrl($stateParams) {
    var vm = this;
    vm.playlistId = $stateParams.playlistId;
    vm.playlist = [
      {
        username: 'jeff',
        songUri: 'test/uri',
        played: false
      },
      {
        username: 'pat',
        songUri: 'test/uri',
        played: false
      },
      {
        username: 'rachel',
        songUri: 'test/uri',
        played: true
      }
    ];
  }
    
})();
