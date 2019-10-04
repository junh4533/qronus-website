$(document).ready(function () {

  //init fagefiling
  // $('#pagepiling').pagepiling({
  //   scrollingSpeed: 1400,
  //   onLeave: function () {
  //     $('.section.active [data-aos]').each(function () {
  //       $('#test').addClass("aos-animate")
  //       console.log("hello")
  //     });
  //   }
  // });

  // global configuration for AOS
  AOS.init({
    delay: 100,
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-cubic',
  });

  $(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 500);
    console.log("scrolled");
  });

  document.addEventListener('aos:in:progress_bar', setTimeout(
      function () {
        document.getElementById("progress_bar").classList.add("grow");
        // setTimeout(
        //   function () {
        //     document.getElementById("progress_bar").classList.remove("grow");
        //     console.log("removed");
        //   }, 5000)
      }, 1000)

  );

  

  // document.addEventListener('aos:out:progress_bar', setTimeout(
  //   function () {
  //     document.getElementById("progress_bar").classList.remove("grow");
  //   }, 1000));

});