
const swiper = new Swiper('#feedbacks_slider', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 85,
     loop: true,

  
    // Navigation arrows
    navigation: {
      nextEl: '.feedback_btn_next',
      prevEl: '.feedback_btn_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1151: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 85,
      },
    }

  });



  $(document).on("click", ".feedback_read_more_btn",function(){
         $(this).parent(".feedback_read_more_btn_info_wrapper").parent().parent().toggleClass("open");
  });

  $(document).on("click", ".more_about_candidates_btn", function(){
      $(".our_candidates_item_info_box").removeClass("open");
    $(this).parent().find(".our_candidates_item_info_box").addClass("open");
  
  })



  $(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').animate({right: '0'}, 0.5);
    $("body").addClass("hidden_body");
  
});

$(document).on("click", ".mobile_close", function(){
  
    $('.mobile_version').animate({right: '-980px'}, 0.5);
    $("body").removeClass("hidden_body");

  
});


const swiper2 = new Swiper('#our_candidates_item_slider', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
   loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.our_candidates_item_btn_next',
    prevEl: '.our_candidates_item_btn_prev',
  },


});

$(document).on("click", ".mobile_header_call_link_title_svg_wrapper", fucntion(){
  $(this).parent().toggleClass("open");
})
