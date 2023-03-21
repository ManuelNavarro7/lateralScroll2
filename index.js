let x = $(".one h1").offset();
let one = $(".one").width();
let para = $(".one h1").width();
let right = one - (x.left + para);
let twoOffset = $(".two h1").offset();
let twoLeftOffset = twoOffset.left - one;
let firstLine = twoLeftOffset + right;
let leftPos = para + x.left;

// $(".horizontal-line").css({"top": x.top, "left": leftPos});
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
			// .addIndicators()
			.addTo(controller);


//    let horizontal = new ScrollMagic.Scene({
//         offset: 50,
//         duration: 300,
//        // reverse: false
//       })
	//   .setTween(".horizontal-line", {width: firstLine}) // trigger a TweenMax.to tween
    //     // .addIndicators()
    //     .addTo(controller);

//Menu

let active = true;

document
  .querySelector(".st-burger-icon")
  .addEventListener("click", function () {
    active = !active;

    console.log(active);
    if (active === false) {
      console.log("hola false");
      this.classList.toggle("st-burger-icon--transformed");
      let closeThings = document.querySelector(".active");
      closeThings.classList.add("close");
      let closeThings1 = document.querySelector(".ListRef2");
      closeThings1.classList.remove("close");
    }
    if (active === true) {
      console.log("hola true");
      let burgerClose = document.querySelector(".st-burger-icon");
      burgerClose.classList.remove("st-burger-icon--transformed");
      let closeThings = document.querySelector(".active");
      closeThings.classList.remove("close");
      let closeThings1 = document.querySelector(".Jsclases");
      closeThings1.classList.add("close");
    }
  });