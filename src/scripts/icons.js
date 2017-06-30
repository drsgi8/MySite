$(function(){
  var width = window.innerWidth/3;
  var icons = [];
  $.each($('.fa'), function(){
    icons.push($(this));
  });

  resetIcons();

  window.onresize = resetIcons;

  setInterval(moveLeft, 25);

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

  function moveLeft(){
    for(var i=0; i<icons.length; i++){
      var x = icons[i].offset().left - 2;
      if(x < (-1) * width)
        x = window.innerWidth;
      icons[i].css({left: x});
    }
  }

});
