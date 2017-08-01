function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if(!isMobile()){

  $(function(){
    var width = window.innerWidth/3;
    var offset = 0;
    var mouseover = false;
    var icons = [];
    $.each($('.fa'), function(){
      icons.push($(this));
    });

    resetIcons();

    window.onresize = resetIcons;

    setInterval(moveIcons, 25);

    $('#icon-container').hover(function(){
      mouseover = true;
    }, function(){
      mouseover = false;
    }).mousemove(function(event){
      offset = (event.pageX / window.innerWidth - 0.5) * 24;
    });

    function resetIcons(){
      for(var i=0; i<icons.length; i++){
        width = window.innerWidth/3;
        var pos = width * i;
        icons[i].css({
          left: pos,
          width: width
        });
      }
    }

    function moveIcons(){
      if(offset != 0){
        for(var i=0; i<icons.length; i++){
          var x = icons[i].offset().left + offset;
          if(x < (-1) * width)
            x = window.innerWidth;
          else if(x > window.innerWidth)
            x = (-1) * width;
          icons[i].css({left: x});
        }
        if(!mouseover)
          offset *= 0.98;
      }
    }
  });

}
