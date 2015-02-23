/* App Module */

var contactsApp = angular.module('contactsApp', [
  'ngRoute',
  'controllers'
]);



window.onload = function() {
	// var options = {
	//   preventDefault: true
	// };


  // $('#scrollbar').scroll(function() {
  //   s = $('#scrollbar').scrollTop();
  //   $('#main').css("-webkit-transform", "translateY(" + (s*10) + "px)");
  // })

	var main = new Hammer(document.getElementById("main"));
  var scrollbar = new Hammer(document.getElementById("scrollbar"));


  // Summon thy gracious side bar
	Hammer(document.getElementById("main")).on("swipe", function() {
      console.log("hello");
      $('#scrollbar').animate({right: "0"}, 500)  
  });

  // Hide side bar after a delay
  Hammer(document.getElementById("scrollbar")).on("panend", function() {
      $('#scrollbar').delay(2000).animate({right: "-50"}, 500);  
  });


  // Hammer(document.getElementById("#contact-" + contact.id)).on("swipe", function() {
  //     console.log(contact.id);
  // });
  
  
  var scrollVal = 0;
  var mainHeight = $('#main').height();
  var scrollbarHeight = $('#scrollbar').height();
  var coeff = mainHeight / scrollbarHeight;

  console.log(mainHeight);
  console.log(scrollbarHeight);

  scrollbar.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

  // listen to events...
  scrollbar.on("panup pandown", function(ev) {
      console.log(ev.type +" gesture detected.");

      scrollVal = $('#scrollbar').scrollTop();
      console.log(scrollVal);

      $('html, body').animate({ scrollTop: scrollVal * coeff }, { duration: 10, easing: 'swing'});
  });
};
