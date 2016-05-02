(function() {
  angular.module('TestModule')
    .controller('TestCtrl', function() {
      var vm = this;

      vm.foo = 'bar';
    });
})();
