import { navAttacher } from './scripts/nav.js';

$(function(){
  
  var windowHeight = $(window).innerHeight();
  $('.parallax').css({'min-height': windowHeight/2+100});

  navAttacher();
});
