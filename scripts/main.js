$(document).ready(function () {

  AOS.init({
    // Global settings:
    container: "#how-does-it-work",

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  // const vh = document.body.clientHeight,
  // vw = document.body.clientWidth;

  // const roll = new Roll (vh);

});