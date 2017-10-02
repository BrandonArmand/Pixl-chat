(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;

    Message.getByRoomId = function(roomId){
      return $firebaseArray(ref.orderByChild("roomid").equalTo(roomId));
    };

    Message.send = function(newMessage){
      messages.$add(newMessage);

      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      var dayNight = "am";

      if (h > 12) {
        h -= 12;
        dayNight = "pm";
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }

      newMessage.sentat = h + ":" + m + dayNight;
    };

    return Message;
  }

  angular
    .module('bloc-chat')
    .factory('Message', ['$firebaseArray', Message]);
})();
