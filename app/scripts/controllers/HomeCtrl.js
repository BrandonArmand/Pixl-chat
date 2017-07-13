(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    this.roomList = Room.all;
    this.currentRoom = null;
    this.modalRoom = function(){
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'md',
        controller: 'ModalCtrl as modal'
      });
    }

    this.setRoom = function(room){
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    };
  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
