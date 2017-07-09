(function() {
  function HomeCtrl(Room) {
    this.roomList = Room.all;
  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
