(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    this.roomList = Room.all;
    this.currentRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.modalRoom = function(){
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        size: 'md',
        controller: 'ModalCtrl as modal'
      });
    };
    this.modalName = function(){
      $uibModal.open({
        templateUrl: '/templates/usernameModal.html',
        size: 'md',
        controller: 'ModalCtrl as modal'
      });
    };

    this.setRoom = function(room){
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    };

    this.sendMessage = function(){
      this.newMessage.roomid = this.currentRoom.$id;
      this.newMessage.username = this.currentUser;
      Message.send(this.newMessage);
    };
  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
