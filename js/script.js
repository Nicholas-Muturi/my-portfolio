$(document).ready(function(){

  $(".navbar a").click(function(){
    $(".navbar a").removeClass("active");
    $(this).addClass("active");
  });

  $(".card .proj1").click(function(){
    $(".proj1Body").slideToggle("slow");
  });
  $(".card .proj2").click(function(){
    $(".proj2Body").slideToggle("slow");
  });
  $(".card .proj3").click(function(){
    $(".proj3Body").slideToggle("slow");
  });
  $(".card .proj4").click(function(){
    $(".proj4Body").slideToggle("slow");
  });

  var timeDuration = 5000;
  $(".chart#html_lvl").easyPieChart({
    size: 180,
    barColor: '#ff6b00',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
  $(".chart#js_lvl").easyPieChart({
    size: 180,
    barColor: '#3fe903',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
  $(".chart#css_lvl").easyPieChart({
    size: 180,
    barColor: '#f00000',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
  $(".chart#bootstrap_lvl").easyPieChart({
    size: 180,
    barColor: '#00c2ff',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
});
