function opacity_range(val, max, min) {
  return (val - min) / (max - min);
}

// $(window).on('load', function () {
//   setTimeout(function(){
//     //deferred onload
//     $('#newsletter-modal').modal('show');
//   }, 3000);

// });

$(document).ready(function () {

  //init fagefiling
  $('#pagepiling').pagepiling({
    scrollingSpeed: 1400,
    onLeave: function () {
      $('.section.active [data-aos]').each(function () {
        $('#test').addClass("aos-animate")
        console.log("hello")
      });
    }
  });

  // global configuration for AOS
  AOS.init({
    delay: 800,
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-cubic',
  });

  function viewport_query(viewport) {
    if (viewport.matches) { // viewport width > 1200px (not mobile device)
      var parent = document.querySelector('#split_container'),
        topPanel = parent.querySelector('#long_line_panel'),
        handle = parent.querySelector('#split_divider'),
        tint_long_line = document.getElementById('tint_long_line'),
        tint_qronus = document.getElementById('tint_qronus'),
        skewHack = 1000,
        delta = 0;

      parent.addEventListener('mousemove', function (event) {
        // Get the delta b/w mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';

        width = $(window).width();
        tint_opacity1 = opacity_range(event.clientX, 0, width) * .7;
        tint_opacity2 = opacity_range(event.clientX, width, 0) * .7;
        tint_long_line.style.background = `rgba(0, 0, 0, ${tint_opacity2})`;
        tint_qronus.style.background = `rgba(0, 0, 0, ${tint_opacity1})`;

        grayscale_qronus = opacity_range(event.clientX, width, 0) * 100 + '%';
        grayscale_line = opacity_range(event.clientX, 0, width) * 100 + '%';
        with_qronus_img.style.filter = `grayscale(${grayscale_qronus})`;
        long_queue_img.style.filter = `grayscale(${grayscale_line})`;
      });
    } else {
      $("#qronus_statement").before($("#with_qronus")); //move with qronus before its description
      tint_qronus.style.background = `rgba(0, 0, 0, .8)`;
      tint_long_line.style.background = `rgba(0, 0, 0, .8)`;
    }
  }

  var viewport = window.matchMedia("(min-width: 1200px)")
  viewport_query(viewport) // Call listener function at run time
  viewport.addListener(viewport_query) // Attach listener function on state changes

});