
<script src="/path/to/cdn/jquery.slim.min.js"></script>

$(window).scroll(function(){

  var scroll = $(window).scrollTop();

  if (scroll > 0){

    $("topheader").addClass('scrolled');

  }else{

    $("topheader").removeClass('scrolled');

  }

})
