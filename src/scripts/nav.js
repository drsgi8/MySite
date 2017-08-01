function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if(!isMobile()){

  $(function(){
    $(window).scroll(function () {
       if ($(window).scrollTop() > 400) {
         $('#nav_bar').addClass('nav-fixed');
         $('body').css({'padding-top':'60px'});
       }
       else if ($(window).scrollTop() < 401) {
         $('#nav_bar').removeClass('nav-fixed');
         $('body').css({'padding':'0'});
       }
     });
  });

}
