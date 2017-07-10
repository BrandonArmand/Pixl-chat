(function() {
  function HomeCtrl(Room, $uibModal) {
    this.roomList = Room.all;
    this.modalRoom = function(){
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    }
  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
