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

	Hammer(document.getElementById("main")).on("swipe", function() {
      console.log("hello");
      $('#scrollbar').animate({right: "0"}, 500)  
  });


  // Hammer(document.getElementById("#contact-" + contact.id)).on("swipe", function() {
  //     console.log(contact.id);
  // });
  
  
  var scrollbar = new Hammer(document.getElementById("scrollbar"));
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


$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}