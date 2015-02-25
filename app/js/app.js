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



  // Greensock spinner tutorial link: http://codepen.io/GreenSock/pen/gnoDc
  var content = document.getElementById("main");
  var knob = document.getElementById("knob");
  var maxScroll = content.scrollHeight - content.offsetHeight;
  var needsRotationUpdate = false;
  var sections = 9;

  //when the user drags the knob, we must update the scroll position. We're using the special scrollProxy object of Draggable because it allows us to overscroll (normal browser behavior won't allow it to scroll past the top/bottom). 
  function onRotateKnob() {
    dragContent.scrollProxy.top(maxScroll * dragKnob.rotation / -360);
    needsRotationUpdate = false;
  }

  //this method updates the knob rotation, syncing it to wherever the content's scroll position is
  function updateRotation() {
    TweenMax.set(knob, {rotation:360 * (content.scrollTop / maxScroll)});
    needsRotationUpdate = false;
  }

  //if the user flicks/spins/drags with momentum, a tween is created, but if the user interacts again before the tween is done, we must kill that tweens (so as not to fight with the user). This method kills any tweens of the knob or the content's scrollProxy.
  function killTweens() {
    TweenLite.killTweensOf([knob, dragContent.scrollProxy]);
  }
  content.addEventListener("mousewheel", killTweens);
  content.addEventListener("DOMMouseScroll", killTweens);

  //whenever the content gets scrolled (like by using the mousewheel or dragging the content), we simply set a flag indicating we need to update the knob's rotation. We use a "tick" handler later to actually trigger the update because that optimizes performance since ticks happen on requestAnimationFrame and we want to avoid thrashing
  content.addEventListener("scroll", function() {
    needsRotationUpdate = true;
  });
  TweenLite.ticker.addEventListener("tick", function() {
    if (needsRotationUpdate) {
      updateRotation();
    }
  });

  //create the knob Draggable
  Draggable.create(knob, {
    type:"rotation",
    throwProps:true,
    edgeResistance:0.85,
    bounds:{minRotation:0, maxRotation:360},
    onDragStart:killTweens,
    onDrag: onRotateKnob,
    onThrowUpdate: onRotateKnob,
    snap: function(endValue) {
      var step = 360 / (sections - 1);
      return Math.round( endValue / step) * step;
    }
  });

  //create the content Draggable
  Draggable.create(content, {
    type:"scrollTop", 
    edgeResistance:0.5, 
    throwProps:true,
    onDragStart: killTweens,
    snap: function(endValue) {
      var step = maxScroll / (sections - 1);
      return Math.round( endValue / step) * -step;
    }
  });

  //grab the Draggable instances for the content and the knob, and store them in variables so that we can reference them in other functions very quickly. 
  var dragContent = Draggable.get(content);
  var dragKnob = Draggable.get(knob);


};


