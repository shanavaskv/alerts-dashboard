app.controller('AlertsCtrl', function($scope, Product, ngProgress, toaster) {

$scope.alert = new Alert();

var refresh = function() {
  $scope.alerts = Alert.query();
  $scope.alert = "";
}
refresh();

$scope.add = function(alert) {
  Alert.save(alert,function(alert){
    refresh();
  });
};

$scope.update = function(alert) {
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
}

})
