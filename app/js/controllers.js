'use strict';

/* Controllers */

var pubMethods = {};

var phonecatControllers = angular.module('phonecatControllers', []);


phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.isCollapsed = false;
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';

   // Add a Item to the list
  $scope.items = [];



  pubMethods.addItem = $scope.addItem = function () {

      $scope.items.push({
          name: $scope.itemName,
          year:2015
        });

      //phones = $scope.items;

      //update angular if we added an item using an event other than ng-click
      //because angular didn't know that we ran this function and chnanged 
      //any scope variables
      $scope.$apply();
      //show me the latest list
      //console.log($scope.items);

      // Clear input after push
      $scope.itemName = "";
  };

  pubMethods.deleteItem = $scope.deleteItem = function (e) {

    //This is an way to index the items we added, Matt showed me this
    var foundItems = $scope.items.filter(function(item) {
      return item.name === e.target.value;
    });

    console.log(foundItems);
    var foundItemIndex = $scope.items.indexOf(foundItems[0]);
    console.log(foundItemIndex);

      //console.log('deleting');
      $scope.items.splice(foundItemIndex, 1);
     
      $scope.$apply();

  };


}]);

var globallyStored = {};

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
      //This is a how to grab to globally stored variable (this repopulates the input with what was put in)
      globallyStored[$routeParams.phoneId] = globallyStored[$routeParams.phoneId] || phone;
      $scope.user = globallyStored[$routeParams.phoneId].user;
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

     $scope.master = {};

    $scope.update = function(user) {
      // Saves the input elements into global hashtable
      globallyStored[$routeParams.phoneId].user = angular.copy(user);
      
    };

    $scope.reset = function() {
       $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }]);

