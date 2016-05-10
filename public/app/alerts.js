app.controller('AlertsCtrl', function($scope, Alert, elapTime, ngProgress, toaster) {

  $scope.alert = new Alert();

  var refresh = function() {
    $scope.alerts = Alert.query();
    $scope.alert = "";
  }
  refresh();

  $scope.add = function(alert) {
    alert.createdat = new Date();
    alert.acknowldat = new Date(0);
    Alert.save(alert,function(alert){
      refresh();
    });
  };

  $scope.update = function(alert) {
    if (alert.acknowledged){
      if (Date.parse(alert.acknowldat) == 0){
          alert.acknowldat = new Date();
      }
    } else {
      alert.acknowldat = new Date(0);
    }
    alert.$update(function(){
      refresh();
    });
  };

  $scope.remove = function(alert) {
    alert.$delete(function(){
      refresh();
    });
  };

  $scope.edit = function(id) {
    $scope.alert = Alert.get({ id: id });
  };

  $scope.deselect = function() {
    $scope.alert = "";
  };

    // $scope.elapse = function(etime) {
    //   return Date.parse(etime);
    // }
    // $scope.t = function(etime){
    //   var res = {elapse: 0};
    //   res.elapse = elapTime(Date.parse(etime));
    //   return res;
    // };

    // function($interval){
    //   return function(iniTime){
    //     var res = {elapse: 0};
    //     $interval(function() {
    //       res.elapse = Math.floor(((new Date()).getTime() - iniTime)/1000);
    //     }, 1000);
    //     return res;
    // };

})
