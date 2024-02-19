/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

 (function($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // get path relative to javascript
  // ------------------------------------------------------------------------------ //
 
  $(document).ready(function(){

    $('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });

    $('.testimonial-slider').slick({
      autoplay: false,
      autoplaySpeed: 4000,
      fade: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });

    // Manejar clic en el icono del menú para mostrar/ocultar el menú
    $(".bar-icon").on('click', function() {
      $("#navigation").toggleClass("menu-bar");
    });

    // Evitar que el menú se active al deslizar en dispositivos móviles
    $(".bar-icon").on('touchstart', function(event) {
      event.stopPropagation(); // Detener la propagación del evento touchstart
    });

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });

  });

})(jQuery);