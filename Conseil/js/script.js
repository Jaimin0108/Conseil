
// slick-slider
// let responsive = getElementByIdName('responsive');

jQuery('#responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  autoplay: true,  
  autoplaySpeed: 2000,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// javascript

// Get the container element for the slider
// const slider = document.getElementById('responsive');

// Initialize the slider with improved options:
// if (slider) {
//   slider.slick({
//     dots: true, // Display navigation dots for easy slide selection
//     infinite: true, // Loop back to the first slide after the last one
//     speed: 300, // Smooth transition speed (milliseconds)
//     slidesToShow: 2, // Number of slides to display at once
//     slidesToScroll: 1, // Number of slides to scroll per click/swipe
//     autoplay: true, // Enable automatic slide changes after a timeout (optional)
//     autoplaySpeed: 2000, // Duration between automatic slide changes (milliseconds)
//     responsive: {
//       767: { // Breakpoint for smaller screens (768px and below)
//         slidesToShow: 1, // Show only one slide on smaller devices
//         slidesToScroll: 1 // Scroll one slide at a time
//       }
//     }
//   });
// } else {
//   console.error("Slider element with ID 'responsive' not found. Please double-check the ID you're using.");
// }


$(document).ready(function ($) {
    if ($(window).width() < 992) {
        // Select the list items in .header-3 ul
        var rightmenus = $('.right-menus');
        // Append the list items to .header-1 ul
        // $('.right-menus').append(rightmenus.clone());

        $(".mobile-toggle").click(function(){
            $(".right-menus").slideToggle();
        });
    }
});


// $(document).ready(function() {
//   var $slider = $('.slider');
//   var $progressBar = $('.progress');
//   var $progressBarLabel = $( '.slider__label' );
  
//   $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
//     var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
//     $progressBar
//       .css('background-size', calc + '% 100%')
//       .attr('aria-valuenow', calc );
    
//     $progressBarLabel.text( calc + '% completed' );
//   });
  
//   $slider.slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 400
//   });  
// });





