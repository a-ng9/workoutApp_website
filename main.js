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
gsap.from(".masthead-image", {
  duration: 1.5,
  opacity: 0,
  scale: 0.3,
  ease: "back",
});

//animation for scroll-ARROW in masthead
gsap.to(".scroll-image", { y: 15, duration: 2, repeat: -1, ease: "elastic" });

//scroll animation triggers for Main Features section
gsap.from("#section-mainFeatures", {
  scrollTrigger: {
    // markers: true,
    start: "20% 60% ",
    trigger: "#section-mainFeatures",
    toggleActions: "play none none none",
  },
  duration: 2,
  opacity: 0,
});

// Source to check scroll animation
// https://greensock.com/docs/v3/Plugins/ScrollTrigger

function goToSection(i, anim) {
  gsap.set("body", {overflow: "hidden"});
  
  gsap.to("body", {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1.4,
    overwrite: true,
    onComplete: () => gsap.set("body", {overflow: "auto"})
  });
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i)
  });
  
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i)
  });
});