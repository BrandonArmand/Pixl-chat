(function() {
  function ModalCtrl(Room, $uibModalInstance){
    this.cancel = function () {
      $uibModalInstance.dismiss();
    };

    this.submit = function(){
      Room.add(this.modalRoom);
      $uibModalInstance.close();
    };
  }

  angular
    .module('bloc-chat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
