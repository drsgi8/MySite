export function navAttacher(){
  $(window).scroll(function () {
     if ($(window).scrollTop() > 400) {
       $('#nav_bar').addClass('nav-fixed');
       $('body').css({'padding-bottom':'50px'});
     }
     else if ($(window).scrollTop() < 401) {
       $('#nav_bar').removeClass('nav-fixed');
       $('body').css({'padding-bottom':'0'});
     }
   });
}
