(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId){
      return $firebaseArray(ref.orderByChild("roomid").equalTo(roomId));
    };

    return Message;
  }

  angular
    .module('bloc-chat')
    .factory('Message', ['$firebaseArray', Message]);
})();
