/* App Module */

var contactsApp = angular.module('contactsApp', [
  'ngRoute',
  'controllers'
]);


window.onload = function() {

	var main = new Hammer(document.getElementById("main"));
  var actionToggle = new Hammer(document.getElementById("actionToggle"));
  var actionPhone = new Hammer(document.getElementById("actionPhone"));
  var actionText = new Hammer(document.getElementById("actionText"));
  var actionEdit = new Hammer(document.getElementById("actionEdit"));
  var overlay = new Hammer(document.getElementById("overlay"));
  var scrollknob = new Hammer(document.getElementById("scrollknob"));

  var scrollVal = 0;
  var mainHeight = $('#main').height();

  console.log(mainHeight);

  // main.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });

  var currentScrollValue=0;

  var scrollBool = false;
  // listen to events...


  var content = document.getElementById("main");
  var knob = document.getElementById("scrollknob");
  var maxScroll = content.scrollHeight - content.offsetHeight;



/*************** Action menu code ***************/

  var xPos, yPos;

  // Get touch position
  $(document).on('touchstart', '#main', function(e) {
    xPos = e.originalEvent.touches[0].pageX;
    yPos = e.originalEvent.touches[0].pageY;

    $("#actionPhone, #actionText, #actionEdit").css({'top': yPos-30, 'left': xPos-30});
    $("#actionToggle").css({'top': yPos-60, 'left': xPos-60}); 
  });

  main.on("press", function(e) {   
    console.log(xPos, yPos);
    
    $("#actionToggle").fadeIn('fast').css({'top': yPos-60, 'left': xPos-60});
    $("#actionPhone").fadeIn('fast').css({'top': yPos-28, 'left': xPos-90});
    $("#actionText").fadeIn('fast').css({'top': yPos-28, 'left': xPos+35});
    $("#actionEdit").fadeIn('fast').css({'top': yPos-95, 'left': xPos-25});
    $("#overlay").fadeIn('fast');
  });

  main.on("pressup", function(e) {   
    $("#actionToggle").css({'opacity': 0.4});
  });


  actionPhone.on("tap", function(e) {
    console.log('phone call');
    $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
  });

  actionText.on("tap", function(e) {
    console.log('text');
    $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
  });

  actionEdit.on("tap", function(e) {
    console.log('edit');
    $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
  });

  overlay.on("tap", function(e) {
    console.log('close');
    $("#actionToggle, #actionPhone, #actionText, #actionEdit, #overlay").fadeOut('fast');
  });



  /*************** Scrolling ***************/

  main.on("panup pandown", function(e) {
    console.log("panning: " + $('#main').scrollTop());
    $(".knob").val($('#main').scrollTop());
    $(".knob").trigger("change");
      // scrollVal = $('#main').scrollTop();
      // console.log(scrollVal);

      // var scrollBool = true;

      //     if (scrollBool) {
      //       currentScrollValue = scrollVal/10;   
      //     };
  
      // $('html, body').animate({ scrollTop: scrollVal * coeff }, { duration: 10, easing: 'swing'});
  });

  $("#main").scroll(function(){
    $(".knob").val($('#main').scrollTop());
    $(".knob").trigger("change");
    //console.log("scrolling");
  });

  $(".knob").knob({
      change : function (value) {
          console.log("change : " + value);
          var increments = (maxScroll / 70) * (value);
          $('#main').scrollTop = increments;

          if (value == 100) {
            $(".gradient").fadeOut('fast');
          }
          // console.log(increments);
          // $('#main').scrollTop(increments);

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
  });
};



/*************** Old Action menu code ***************/

  // var draggable = document.getElementById('actionToggle');
  // draggable.addEventListener('touchmove');

  // var xPos, yPos;
  // // $("#actionToggle").draggable();

  // // Get touch position
  // // $(document).on('touchstart', '#main', function(e) {
  // //   xPos = e.originalEvent.touches[0].pageX;
  // //   yPos = e.originalEvent.touches[0].pageY;  
  // //   console.log(xPos, yPos);
  // // });


  // $( "#main" ).on({
  //   touchstart: function(e) {
  //     xPos = e.originalEvent.touches[0].pageX;
  //     yPos = e.originalEvent.touches[0].pageY;  
  //     console.log(xPos, yPos);

  //     $("#actionToggle").css({'left': xPos + 'px'});
  //     $("#actionToggle").css({'top': yPos + 'px'});



  //     pressTimer = window.setTimeout(function() {
  //       $("#actionToggle").fadeIn('fast');
  //       draggable.addEventListener('touchmove', function(event) {
          
  //         console.log('dragging');
  //         var touch = event.targetTouches[0];
          
  //         $('html, body').css({
  //             'overflow': 'hidden',
  //             'height': '100%'
  //         });
  //         // Place element where the finger is
  //         $("#actionToggle").css({'left': touch.pageX + 'px'});
  //     $("#actionToggle").css({'top': touch.pageY + 'px'});
  //         // $("#actionToggle").preventDefault();
  //       }, false);
  //     },1000)
  //     return false; 
      

  //   }, touchend: function() {
  //     $("#actionToggle").fadeOut('fast');
  //     // console.log("dragging");

  //     // pressTimer = window.setTimeout(function(e) {
  //     //   console.log("pressing");
  //     //   // $("#actionToggle").fadeIn('fast');


  //     //   draggable.addEventListener('touchmove', function(event) {
  //     //     var touch = event.targetTouches[0];
          
  //     //     $('html, body').css({
  //     //         'overflow': 'hidden',
  //     //         'height': '100%'
  //     //     });
  //     //     // Place element where the finger is
  //     //     $("#actionToggle").css({'left': xPos + 'px'});
  //     //     $("#actionToggle").css({'top': yPos + 'px'});
  //     //     // $("#actionToggle").preventDefault();
  //     //   }, false);
  //     // },1000)
  //     // return false; 
  //   }
  // });





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