import 'jquery';
import 'p5';
import './scripts/nav';
import './scripts/header';
import './style.scss';
import './scripts/icons';
import './scripts/google-analytics';

$(function(){

  var windowHeight = $(window).innerHeight();
  $('.inner-cell-container').css({'height': windowHeight});
});
