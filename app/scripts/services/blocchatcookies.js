(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernameModal.html',
        size: 'md',
        controller: 'ModalCtrl as modal'
      })
    }
  }

  angular
    .module('bloc-chat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
