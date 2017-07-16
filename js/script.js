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


;(function(window, document) {
  'use strict';
  var file = 'img/svg-sprite.svg', // путь к файлу спрайта на сервере
      revision = 3;            // версия спрайта
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
    request,
    data,
    insertIT = function() {
      document.body.insertAdjacentHTML('afterbegin', data);
    },
    insert = function() {
      if (document.body) insertIT();
      else document.addEventListener('DOMContentLoaded', insertIT);
    };
  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');
    if (data) {
      insert();
      return true;
    }
  }
  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    }
    request.send();
  } catch (e) {}
}(window, document));

