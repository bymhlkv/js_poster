$(function() {
  $(".circle1a, .circle2a, .circle3a, .circle4a, .circle5a, .circle6a, .circle7a, .circle8a, .circle9a, .circle10a, .circle11a, .circle12a, .circle13a, .circle14a, .circle15a, .circle16a, .circle17a, .circle18a, .circle19a, .rectangle1a, .rectangle2a, .rectangle3a, .rectangle4a, .rectangle5a, .rectangle6a, .colorimg1a, .colorimg2a, .colorimg3a, .colorimg4a, .whiteimg1, .whiteimg2, .cross1a, .cross2a, .cross3a, .cross4a, .cross5a, .cross6a, .cross7a, .cross8a, .cross9a, .figimg1a, .figimg2a, .figimg3a").draggable();
});


$(document).ready(function(){
  $('#screen3_1').hide();
});
$(document).ready(function(){
  $('#screen3_2').hide();
});
$(document).ready(function(){
  $('#screen3_3').hide();
});


$(document).ready(function(){
  $('#bubble1').hide();
});
$(document).ready(function(){
  $('#bubble2').hide();
});
$(document).ready(function(){
  $('#bubble3').hide();
});
$(document).ready(function(){
  $('#bubble4').hide();
});
$(document).ready(function(){
  $('#bubble5').hide();
});


$(document).ready(function(){
  $("#helpimg1a").on('click', function(){
    $('#screen3_2').show();
  });
});
$(document).ready(function(){
  $("#okbotton_main").on('click', function(){
    $('#screen3_2').hide();
  });
});



$(document).ready(function(){
  $("#cross5a").on('click', function(){
    $('#bubble1').toggle();
  });
});
$(document).ready(function(){
  $("#cross8a").on('click', function(){
    $('#bubble2').toggle();
  });
});
$(document).ready(function(){
  $("#cross9a").on('click', function(){
    $('#bubble3').toggle();
  });
});
// $(document).ready(function(){
//   $("#cross9a").on('click', function(){
//     $('#bubble3').toggle();
//   });
// });
