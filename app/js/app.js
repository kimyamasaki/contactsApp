/* App Module */

var contactsApp = angular.module('contactsApp', [
  'ngRoute',
  'controllers'
]);



window.onload = function() {
	// var options = {
	//   preventDefault: true
	// };

	var main = new Hammer(document.getElementById("main"));

	Hammer(document.getElementById("main")).on("swipe", function() {
          console.log("hello");
          $('#scrollbar').animate({right: "0"}, 500)  
    });


	var start, end;

    Hammer(document.getElementById("scrollbar")).on("panstart", function(e) {
        // console.log("start");
        start = e.distance
        // $('html, body').animate({scrollTop: "0"}, 500);
    });

    Hammer(document.getElementById("scrollbar")).on("panend", function(e) {
        
        end = e.distance       
        var totalDistance = end - start;
		console.log(totalDistance);
        $('html, body').animate({scrollTop: ($(window).scrollTop()+1) * (totalDistance)}, 500);
    });
};


