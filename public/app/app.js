var app = angular.module('myApp', ['ngResource', 'ngProgress', 'ngAnimate', 'toaster']);
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('myHttpInterceptor');
});

// Handle http server errors
app.factory('myHttpInterceptor', function ($q,toaster) {
    return {
        responseError: function (response) {
          console.log(response);
          if(response.data){
            if(response.data.message)
            toaster.error("Error: ", response.data.message);
            else
            toaster.error("Error: ", response.data);
          }
          return $q.reject(response);
        }
    };
});

// Showing loading indicator on top while data is requested from database
app.directive('loading',   ['$http', 'ngProgress', function ($http, ngProgress)
{
    return {
        restrict: 'A',
        link: function (scope, elm, attrs)
        {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v)
            {
                if(v){
                    ngProgress.start();
                }else{
                    ngProgress.complete();
                }
            });
        }
    };
}]);

app.factory('Alert', function($resource) {
  return $resource('/api/alerts/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});

app.factory('elapTime', function($interval){
    return function(iniTime){
    		// var res = {elapse: 0};
        var res = 0;
        $interval(function() {
            res = Math.floor(((new Date()).getTime() - iniTime)/1000);
        }, 1000);
        return res;
    };
})
