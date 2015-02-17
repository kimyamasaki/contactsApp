'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

     $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
      console.log("hi it saved, I think");
      console.log($scope.master);
    };

    $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }]);


//var formController = angular.module('form', []);

// phonecatControllers.controller('formController', ['$scope', 
//   function($scope) {
//     $scope.master = {};

//     $scope.update = function(user) {
//       $scope.master = angular.copy(user);
//     };

//     $scope.reset = function() {
//        $scope.user = angular.copy($scope.master);
//     };

//     $scope.reset();
//   }]);


// <script>
//   angular.module('formExample', [])
//     .controller('ExampleController', ['$scope', function($scope) {
//       $scope.master = {};

//       $scope.update = function(user) {
//         $scope.master = angular.copy(user);
//       };

//       $scope.reset = function() {
//         $scope.user = angular.copy($scope.master);
//       };

//       $scope.reset();
//     }]);
// </script>
