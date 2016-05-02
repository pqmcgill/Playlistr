(function() {
  angular.module('PlayList')
    .controller('PlayListCtrl', PlayListCtrl);

  function PlayListCtrl($stateParams) {
    var vm = this;
    vm.playlistId = $stateParams.playlistId;
  }
    
})();
