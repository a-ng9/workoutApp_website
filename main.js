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
//animation for picture in masthead (pop animation)
gsap.from(".phone1", {
  duration: 1.5,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

//animation for scroll-ARROW in masthead
gsap.to(".scroll-image", { y: 20, duration: 2.5, repeat: 5, ease: "elastic" });

//scroll animation triggers for other sections
gsap.from("#section-mainFeatures", {
  scrollTrigger: {
    markers: true,
    start: "20% 60% ",
    trigger: "#section-mainFeatures",
    toggleActions: "play restart none none",
  },
  duration: 2,
  opacity: 0,
});

// Source to check scroll animation
// https://greensock.com/docs/v3/Plugins/ScrollTrigger
