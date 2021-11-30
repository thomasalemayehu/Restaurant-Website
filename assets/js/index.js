// gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ ease: "none", duration: 2 });

// const t1 = gsap.timeline();

// t1.from(".menu-item-one", { xPercent: -100 })
//   .from(".menu-item-two", { yPercent: 100 })
//   .from(".menu-item-three", { xPercent: -100 })
//   .from(".menu-item-four", { xPercent: 100 });

// ScrollTrigger.create({
//   animation: t1,
//   trigger: ".menu-page-container",
//   start: "top top",
//   end: "+=000",
//   scrub: true,
//   pin: true,
//   anticipatePin: 1,
// });

// Navigation Bar on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#01103f";
    document.getElementById("navigation-section").style.paddingBottom = "1%";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}
