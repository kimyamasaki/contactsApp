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
  var actionToggle = new Hammer(document.getElementById("actionToggle"));
  var scrollbar = new Hammer(document.getElementById("scrollbar"));


 //  // Summon thy gracious side bar
	// Hammer(document.getElementById("main")).on("swipe", function() {
 //      console.log("hello");
 //      $('#scrollbar').animate({right: "0"}, 500)  
 //  });

 //  // Hide side bar after a delay
 //  Hammer(document.getElementById("scrollbar")).on("panend", function() {
 //      $('#scrollbar').delay(2000).animate({right: "-50"}, 500);  
 //  });


  // Hammer(document.getElementById("#contact-" + contact.id)).on("swipe", function() {
  //     console.log(contact.id);
  // });
  
  
  var scrollVal = 0;
  var mainHeight = $('#main').height();
  var scrollbarHeight = $('#scrollbar').height();
  var coeff = mainHeight / scrollbarHeight;



  console.log(mainHeight);
  console.log(scrollbarHeight);

  main.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

  var currentScrollValue=0;

  var scrollBool = false;
  // listen to events...
  main.on("panup pandown", function(ev) {
      scrollVal = $('#main').scrollTop();
      // $(".knob").knob({
      // change : function (scrollVal) {
      
      // }
      // });


      console.log(scrollVal);

      // var scrollBool = true;

      //     if (scrollBool) {
      //       currentScrollValue = scrollVal/10;
            
      //     };

  

      // $('html, body').animate({ scrollTop: scrollVal * coeff }, { duration: 10, easing: 'swing'});
  });


  var content = document.getElementById("main");
  var knob = document.getElementById("scrollknob");
  var maxScroll = content.scrollHeight - content.offsetHeight;
  // var needsRotationUpdate = false;
  // var sections = 9;

//have an event

// $(rootElement).hammer({domEvents:true}).on("press",".elementSelector",callback);


  // actionToggle.on("press", function() {
  //   $("#actionPhone").toggle('fast');
  //   $("#actionText").toggle('fast');
  //   $("#actionOther").toggle('fast');
  // });

  // actionPhone.on("release", function(){
  //   document.body..add('light');
  // });

  //Scrolling 
  $("#main").scroll(function(){
    $(".knob").val($('#main').scrollTop()/10);
    $(".knob").trigger("change");
    //console.log("scrolling");
 });

  $(".knob").knob({
      change : function (value) {



          console.log("change : " + value);

          var increments = (maxScroll / 100) * (value);


          content.scrollTop = increments;
          //console.log(increments);
          //$('#main').scrollTop(increments);


          // if (value == 100) {
          //   console.log("sdfs");
          // }
      },
      release : function (value) {
          //console.log(this.$.attr('value'));
          //console.log("release : " + value);
      },
      cancel : function () {
          console.log("cancel : ", this);
      },
      /*format : function (value) {
          return value + '%';
      },*/
      // draw : function () {

      //     // "tron" case
      //     if(this.$.data('skin') == 'tron') {

      //         this.cursorExt = 0.3;

      //         var a = this.arc(this.cv)  // Arc
      //             , pa                   // Previous arc
      //             , r = 1;

      //         this.g.lineWidth = this.lineWidth;

      //         if (this.o.displayPrevious) {
      //             pa = this.arc(this.v);
      //             this.g.beginPath();
      //             this.g.strokeStyle = this.pColor;
      //             this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
      //             this.g.stroke();
      //         }

      //         this.g.beginPath();
      //         this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
      //         this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
      //         this.g.stroke();

      //         this.g.lineWidth = 2;
      //         this.g.beginPath();
      //         this.g.strokeStyle = this.o.fgColor;
      //         this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
      //         this.g.stroke();

      //         return false;
      //     }
      // }
  });


  // // Greensock spinner tutorial link: http://codepen.io/GreenSock/pen/gnoDc
  // var content = document.getElementById("main");
  // var knob = document.getElementById("scrollknob");
  // var maxScroll = content.scrollHeight - content.offsetHeight;
  // var needsRotationUpdate = false;
  // var sections = 9;

  // //when the user drags the knob, we must update the scroll position. We're using the special scrollProxy object of Draggable because it allows us to overscroll (normal browser behavior won't allow it to scroll past the top/bottom). 
  // function onRotateKnob() {
  //   dragContent.scrollProxy.top(maxScroll * dragKnob.rotation / -360);
  //   needsRotationUpdate = false;
  // }

  // //this method updates the knob rotation, syncing it to wherever the content's scroll position is
  // function updateRotation() {
  //   TweenMax.set(knob, {rotation:360 * (content.scrollTop / maxScroll)});
  //   needsRotationUpdate = false;
  // }

  // //if the user flicks/spins/drags with momentum, a tween is created, but if the user interacts again before the tween is done, we must kill that tweens (so as not to fight with the user). This method kills any tweens of the knob or the content's scrollProxy.
  // function killTweens() {
  //   TweenLite.killTweensOf([knob, dragContent.scrollProxy]);
  // }
  // content.addEventListener("mousewheel", killTweens);
  // content.addEventListener("DOMMouseScroll", killTweens);

  // //whenever the content gets scrolled (like by using the mousewheel or dragging the content), we simply set a flag indicating we need to update the knob's rotation. We use a "tick" handler later to actually trigger the update because that optimizes performance since ticks happen on requestAnimationFrame and we want to avoid thrashing
  // content.addEventListener("scroll", function() {
  //   needsRotationUpdate = true;
  // });
  // TweenLite.ticker.addEventListener("tick", function() {
  //   if (needsRotationUpdate) {
  //     updateRotation();
  //   }
  // });

  // //create the knob Draggable
  // Draggable.create(knob, {
  //   type:"rotation",
  //   throwProps:true,
  //   edgeResistance:0.85,
  //   bounds:{minRotation:0, maxRotation:360},
  //   onDragStart:killTweens,
  //   onDrag: onRotateKnob,
  //   onThrowUpdate: onRotateKnob,
  //   snap: function(endValue) {
  //     var step = 360 / (sections - 1);
  //     return Math.round( endValue / step) * step;
  //   }
  // });

  // //create the content Draggable
  // Draggable.create(content, {
  //   type:"scrollTop", 
  //   edgeResistance:0.5, 
  //   throwProps:true,
  //   onDragStart: killTweens,
  //   snap: function(endValue) {
  //     var step = maxScroll / (sections - 1);
  //     return Math.round( endValue / step) * -step;
  //   }
  // });

  // //grab the Draggable instances for the content and the knob, and store them in variables so that we can reference them in other functions very quickly. 
  // var dragContent = Draggable.get(content);
  // var dragKnob = Draggable.get(knob);

};


