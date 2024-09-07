gsap.from("#sec2", {
  scale: 0.9,
  borderRadius: "100",

  height: "100vh",
  duration: 3,
  scrollTrigger: {
    trigger: "body",
    scroller: "body",
  },
});

let sections = gsap.utils.toArray(".hscroll");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#sec2",
    pin: true,
    scrub: 1,
    start: "top 50",
    end: "+=3000",
    // markers: true,
  },
});
