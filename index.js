let x = $(".one h1").offset();
let one = $(".one").width();
let para = $(".one h1").width();
let right = one - (x.left + para);
let twoOffset = $(".two h1").offset();
let twoLeftOffset = twoOffset.left - one;
let firstLine = twoLeftOffset + right;
let leftPos = para + x.left;

$(".horizontal-line").css({"top": x.top, "left": leftPos});
// init controller
let controller = new ScrollMagic.Controller();

// let controller = new ScrollMagic.Controller();

		// define movement of panels
		let wipeAnimation = new TimelineMax()
			.to("#slideContainer", 1,   {x: "-75%"})

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
		  .setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators()
			.addTo(controller);


   let horizontal = new ScrollMagic.Scene({
        offset: 50,
        duration: 300,
       // reverse: false
      }).setTween(".horizontal-line", {width: firstLine}) // trigger a TweenMax.to tween
        // .addIndicators()
        .addTo(controller);