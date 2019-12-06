$(document).ready(function () {


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
      }, 1000)
  );


});