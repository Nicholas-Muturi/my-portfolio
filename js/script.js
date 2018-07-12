$(document).ready(function(){

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

  var timeDuration = 2500;
  $(".chart#html_lvl").easyPieChart({
    size: 180,
    barColor: '#ee6400',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
  $(".chart#js_lvl").easyPieChart({
    size: 180,
    barColor: '#37c605',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
  $(".chart#css_lvl").easyPieChart({
    size: 180,
    barColor: '#d71111',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
  $(".chart#bootstrap_lvl").easyPieChart({
    size: 180,
    barColor: '#0085ff',
    lineWidth: 7,
    scaleColor: false,
    animate: {
      duration: timeDuration,
      enabled: true,
    },
  });
});
