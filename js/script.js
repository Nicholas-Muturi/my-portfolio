/*$(document).ready(function(){
  jQuery("h1").click(function(){
    alert("This is a header");
  });

  $("p").click(function(){
    alert("This is a paragraph");
  });

  $("img").click(function(){
    alert("this is an image");
  });
});*/
$(document).ready(function(){

  $(".title-1").click(function(){
    $(".text-1").slideDown();
    $(".text-1").show();
  });

  $(".text-1").click(function(){
    $(".text-1").slideUp(function(){
      $(".text-1").hide();
    });

  });

  $(".title-2").click(function(){
    $(".text-2").slideDown();
    $(".text-2").show();
  });

  $(".text-2").click(function(){
    $(".text-2").slideUp(function(){
      $(".text-2").hide();
    });
  });

  $(".title-3").click(function(){
    $(".text-3").slideDown();
    $(".text-3").show();;
  });

  $(".text-3").click(function(){
    $(".text-3").slideUp(function(){
      $(".text-3").hide();
    });
  });

});
