(function() {
  function ModalCtrl($cookies, Room, $uibModalInstance){
    this.cancel = function () {
      $uibModalInstance.dismiss();
    };

    this.submit = function(){
      Room.add(this.modalRoom);
      $uibModalInstance.close();
    };

    this.setUsername = function(){
      $cookies.put('blocChatCurrentUser', this.username);
      $uibModalInstance.close();
      location.reload();
    };

    this.guestUsername = function(){
      $cookies.put('blocChatCurrentUser', 'Guest User');
      $uibModalInstance.close();
      location.reload();
    }
  }

  angular
    .module('bloc-chat')
    .controller('ModalCtrl', ['$cookies', 'Room', '$uibModalInstance', ModalCtrl]);
})();
