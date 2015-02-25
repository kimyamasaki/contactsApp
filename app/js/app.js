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





  // function wipeStatus(span, dir, result)
  // {
  //   $("#" + span + "Result").html("Wiped " + dir + ", speed " + result.speed + ", X " + result.x + ", Y " + result.y);
  // }

  // function wipeMove(span, result)
  // {
  //   $("#" + span + "Result").html("X " + result.curX + ", Y " + result.curY);
  // }

  // $("#main").wipetouch(
  // {

  //   wipeLeft: function(result) { wipeStatus("basic", "LEFT", result); },
  //   wipeRight: function(result) { wipeStatus("basic", "RIGHT", result); },
  //   wipeUp: function(result) { wipeStatus("basic", "UP", result); },
  //   wipeDown: function(result) { wipeStatus("basic", "DOWN", result); },
  //   wipeMove: function(result) { wipeMove("basic", result); }
  // });

        // $("#AnotherDemo").wipetouch(
        // {
        //   allowDiagonal: true,
        //   tapToClick: true,
        //   wipeLeft: function(result) { wipeStatus("another", "LEFT", result); },
        //   wipeRight: function(result) { wipeStatus("another", "RIGHT", result); },
        //   wipeUp: function(result) { wipeStatus("another", "UP", result); },
        //   wipeDown: function(result) { wipeStatus("another", "DOWN", result); },
        //   wipeUpLeft: function(result) { wipeStatus("another", "UP LEFT", result); },
        //   wipeUpRight: function(result) { wipeStatus("another", "UP RIGHT", result); },
        //   wipeDownLeft: function(result) { wipeStatus("another", "DOWN LEFT", result); },
        //   wipeDownRight: function(result) { wipeStatus("another", "DOWN RIGHT", result); },
        //   wipeMove: function(result) { wipeMove("another", result); }
        // });

        // $("#AnotherDemo").click(function() { $("#anotherResult").html("You clicked the 'Another demo area'! "); })

};


// $(document).wipetouch({
//   tapToClick: true, // if user taps the screen, triggers a click event
//   wipeLeft: function(result) { 
//     console.log("sdfds");
//     }// do something when user wipes to the left },
//   wipeRight: function(result) { 
//     console.log("weewew");
//     }// do something when user wipes to the right }
// });

var a = document.createElement('a'); a.innerHTML = "DOWNLOAD ME"; document.body.appendChild(a);

a.href= 'video link'

