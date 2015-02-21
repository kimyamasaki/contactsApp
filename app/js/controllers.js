'use strict';

/* Controllers */

//--------------------Contacts Mainpage Controller----------------------//

var pubMethods = {};

var phonecatControllers = angular.module('phonecatControllers', []);


phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    // $scope.isCollapsed = false;
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  
    // $scope.dummyContacts = ["Tiph", "Kim"]; 

    //var dummyContact = {"Tiphanie", "Kim", "Banana", "Batman"};

    // for (var i = 0; i < $scope.dummyContacts.length(); i++) {
    //   console.log($scope.dummyContacts[1]);

    //   $scope.dummyContacts.push({
    //     name: $scope.dummyContacts[1]
    //   });
    // }


  // var contacts = {
  //   c1: {
  //     question: "Generally, what is your opinion on people?",
  //     options: ["I can always find the good in everyone!", "I keep my problems to myself.", "Sheesh, I hate people."],
  //     nextUrl: '#quiz/q2',
  //   },
  //   q2: {
  //     question: "You just finished a long day at work and have arrived home. How do you feel?",
  //     options: ["That was pretty productive!", "I need to get some sleep.", "Every day is the same damn thing."],
  //     nextUrl: '#quiz/q3',
  //   },
  //   q3: {
  //     question: "A conversation with your friend got a little heated. The situation is tense. What do you do?",
  //     options: ["Figure out what's bothering them.", "Tell your friend to snap out of it.", "Tell them to quit being a jerk!"],
  //     nextUrl: '#quiz/q4',
  //   },
  //   q4: {
  //     question: "You just completed a test but you didn't do too well on it. How are you feeling?",
  //     options: ["I'll definitely get it next time!", "Eh, I guess I'll have to study more.", "That test was pretty stupid..."],
  //     nextUrl: '#quiz/q5',
  //   },
  //   q5: {
  //     question: "If you could do anything right now, what would you do?",
  //     options: ["I want to go on adventure!", "A nap sounds pretty solid at the moment.", "I want to be alone. I don't want to deal with anyone."],
  //     nextUrl: '#quiz/results',
  //   }
  // };


   // Add a Item to the list
  $scope.items = [];

  var dummyContacts = ["Tiph", "Kim"];

  // items = dummyContacts;


  for (var i = 0; i < dummyContacts.length; i++) {
    $scope.items.push({
        name: dummyContacts[i]
    });
  }


  pubMethods.addItem = $scope.addItem = function () {

      $scope.items.push({
          name: $scope.itemName,
          //year:2015
        });

      dummyContacts.push($scope.itemName);
      console.log(dummyContacts);

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

//--------------------Contact Details Controller----------------------//


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

