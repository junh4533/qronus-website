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

  $('#scroll-content').WS_ScroLi({
    validEnd: {
      status: true,
      icon: 'fas fa-check'
    },
    // you can enter any selector you want and assign it an icon from fontawesome library
    sections: [
      // ['#how-does-it-work', ''],
      ['#step1', 'fa fa-info'],
      ['#step2', 'fa fa-id-card-o'],
      ['#step3', 'fa fa-mobile'],
    ],
    position: {
      x: ['left', 20],
      y: ['top', 20]
    },
    icon: {
      size: 60,
      borderWidth: 1,
      borderRadius: 100,
      color: '#FF541A',
      colorPast: '#FF6E0B',
      colorOff: 'grey'
    },
    line: {
      height: 30,
      width: 3,
      color: '#FF6E0B',
      colorPast: '#FF6E0B',
      colorOff: 'grey',
    }
  });

  function isElementInViewport(element) {
    return element.getBoundingClientRect().bottom <= (window.innerHeight || document. documentElement.clientHeight)
  }

  document.body.addEventListener("scroll", function() {
    if (isElementInViewport(document.getElementById('customize-header'))) {
      console.log("hide");
      document.getElementById('WS-ScroLi').style.display = "none";
    }
  }
  );


  

});