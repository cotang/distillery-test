jQuery(document).ready(function($){

  /* Open modal window */
  $('.form__btn .btn').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
  });
  /* Close the modal window */
  $('.overlay__bg').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).closest('.overlay').hide();
  });


  $('.hamburger').click(function(e) {
    e.preventDefault();
    $(this).closest('.header').find('.nav').slideDown();
  });
  $('.close').click(function(e) {
    e.preventDefault();
    $(this).closest('.nav').slideUp();
  });

  $(window).resize(function(){
    if ($(window).width() >= 768) {
      $('.nav').show();
    } else {
      $('.nav').hide();
    }
  });



});

