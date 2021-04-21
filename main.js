//Setting the cursor as a touch figure like on smartphones
jQuery(document).ready(function () {
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  $(document).mousemove(function (e) {
    mouseX = e.pageX - 2.5;
    mouseY = e.pageY - 2.5;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    $("#circle").css({ left: xp + "px", top: yp + "px" });
  }, 20);
});

gsap.registerPlugin(ScrollTrigger);

//Animation for picture in masthead (pop animation)
gsap.from(".masthead-image", {
  duration: 1.5,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

//Animation for scroll-ARROW in masthead
gsap.to(".scroll-image", { y: 15, duration: 2, repeat: -1, ease: "elastic" });

//Mainfeatures pop-in animation
gsap.from("#section-mainFeatures", {
  scrollTrigger: {
    // markers: true,
    start: "0% 60% ",
    end: "55% 40%",
    trigger: "#section-mainFeatures",
    toggleActions: "play none none reverse",
  },
  ease: "power",
  y: 100,
  duration: 1.5,
  opacity: 0,
});

//Animation for how-it-works section
//Step 1
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#step1",
      start: "-25% 60%", //Starts animation
      end: "top 25%", //Ends animation
      // markers: true,
      scrub: 1.5,
      // duration: 10,
    },
  })
  .from("#demo1", { y: innerHeight * -0.2, opacity: 0 })
  .from("#num1", { x: innerWidth * 0.2, opacity: 0 })
  .from("#HIW-title1", { x: innerWidth * 0.2, opacity: 0 })
  .from("#HIW-text1", { x: innerWidth * 0.2, opacity: 0 });

//Step 2
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#step2",
      start: "-25% 60%", //Starts animation
      end: "10% 30%", //Ends animation
      markers: true,
      scrub: 1.5,
    },
  })
  .from("#demo2", { y: innerHeight * -0.2, opacity: 0 })
  .from("#num2", { x: innerWidth * -0.2, opacity: 0 })
  .from("#HIW-title2", { x: innerWidth * -0.2, opacity: 0 })
  .from("#HIW-text2", { x: innerWidth * -0.2, opacity: 0 });

//Step 3
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#step3",
      start: "-25% 60%", //Starts animation
      end: "10% 30%", //Ends animation
      // markers: true,
      scrub: 1.5,
    },
  })
  .from("#demo3", { y: innerHeight * -0.2, opacity: 0 })
  .from("#num3", { x: innerWidth * 0.2, opacity: 0 })
  .from("#HIW-title3", { x: innerWidth * 0.2, opacity: 0 })
  .from("#HIW-text3", { x: innerWidth * 0.2, opacity: 0 });

// Step 4
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#step4",
      start: "-25% 60%", //Starts animation
      end: "10% 30%", //Ends animation
      // markers: true,
      scrub: 1.5,
    },
  })
  .from("#demo4", { y: innerHeight * -0.2, opacity: 0 })
  .from("#num4", { x: innerWidth * -0.2, opacity: 0 })
  .from("#HIW-title4", { x: innerWidth * -0.2, opacity: 0 })
  .from("#HIW-text4", { x: innerWidth * -0.2, opacity: 0 });

// Step 5
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#step5",
      start: "-25% 60%", //Starts animation
      end: "10% 30%", //Ends animation
      // markers: true,
      scrub: 1.5,
    },
  })
  .from("#demo5", { y: innerHeight * -0.2, opacity: 0 })
  .from("#num5", { x: innerWidth * 0.2, opacity: 0 })
  .from("#HIW-title5", { x: innerWidth * 0.2, opacity: 0 })
  .from("#HIW-text5", { x: innerWidth * 0.2, opacity: 0 });

// Source to check scroll animation
// https://greensock.com/docs/v3/Plugins/ScrollTrigger
