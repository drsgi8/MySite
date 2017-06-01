import { navAttacher } from './scripts/nav';
import '../node_modules/p5/lib/p5.min';
import './style.scss';

$(function(){

  var windowHeight = $(window).innerHeight();
  $('.parallax').css({'min-height': windowHeight/2+100});

  navAttacher();
});
