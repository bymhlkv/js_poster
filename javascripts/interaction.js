// function touchHandler(event) {
//     var touch = event.changedTouches[0];
//
//     var simulatedEvent = document.createEvent("MouseEvent");
//         simulatedEvent.initMouseEvent({
//         touchstart: "mousedown",
//         touchmove: "mousemove",
//         touchend: "mouseup"
//     }[event.type], true, true, window, 1,
//         touch.screenX, touch.screenY,
//         touch.clientX, touch.clientY, false,
//         false, false, false, 0, null);
//
//     touch.target.dispatchEvent(simulatedEvent);
//     event.preventDefault();
// }
//
// function init() {
//     document.addEventListener("touchstart", touchHandler, true);
//     document.addEventListener("touchmove", touchHandler, true);
//     document.addEventListener("touchend", touchHandler, true);
//     document.addEventListener("touchcancel", touchHandler, true);
// }

$(function() {
  $(".circle1a, .circle2a, .circle3a, .circle4a, .circle5a, .circle6a, .circle7a, .circle8a, .circle9a, .circle10a, .circle11a, .circle12a, .circle13a, .circle14a, .circle15a, .circle16a, .circle17a, .circle18a, .circle19a, .rectangle1a, .rectangle2a, .rectangle3a, .rectangle4a, .rectangle5a, .rectangle6a, .colorimg1a, .colorimg2a, .colorimg3a, .colorimg4a, .whiteimg1, .whiteimg2, .cross1a, .cross2a, .cross3a, .cross4a, .cross5a, .cross6a, .cross7a, .cross8a, .cross9a, .figimg1a, .figimg2a, .figimg3a").draggable();
});

$(function() {
  $(".circle1, .circle2, .circle3, .circle4, .circle5, .circle6, .circle7, .circle8, .circle9, .circle10, .circle11, .circle12, .circle13, .circle14, .circle15, .circle16, .circle117, .rectangle1, .rectangle2, .rectangle3, .colorimg1, .colorimg2, .colorimg3, .whiteimg, .cross1, .cross2, .cross3, .cross4, .cross5, .cross6, .cross7, .cross8, .figimg1, .figimg2, .figimg3").draggable();
});

$(function() {
  $("#bubble1, #bubble2, #bubble3, #bubble4, #bubble5").draggable();
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
  $('#screen3_2').hide();
});
$(document).ready(function(){
  $('#screen3_3').hide();
});
$(document).ready(function(){
  $('#screen2').hide();
});
$(document).ready(function(){
  $('#screen6').hide();
});
$(document).ready(function(){
  $('#screen7').hide();
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
  $("#helpimg1").on('click', function(){
    $('#screen3_2').show();
  });
});
$(document).ready(function(){
  $("#okbotton_main").on('click', function(){
    $('#screen3_2').hide();
  });
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
$(document).ready(function(){
  $("#cross4a").on('click', function(){
    $('#bubble4').toggle();
  });
});
$(document).ready(function(){
  $("#cross2a").on('click', function(){
    $('#bubble5').toggle();
  });
});


$(document).ready(function(){
  $("#circle1a, #circle6a, #circle16a").on('click', function(){
    $('#screen7').show();
  });
});
$(document).ready(function(){
  $("#closeimg").on('click', function(){
    $('#screen7').hide();
  });
});


$(document).ready(function(){
  $("#whiteimg1, #whiteimg2").on('click', function(){;
    $('#screen6').show();
  });
});
$(document).ready(function(){
  $("#whiteimg1b, #whiteimg2b").on('click', function(){;
    $('#screen6').hide();
  });
});






// IMGCOLORCHANGE

$(function () {
  let count = 0;
  $('.circle1a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("blue");
    }
    if (count == 4) {
      $(this).addClass("yellow");
    }
    if (count == 6) {
      $(this).addClass("dark_pink");
    }
    if (count == 8) {
      $(this).removeClass("blue yellow dark_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle2a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("yellow");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink yellow light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle3a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink blue light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle4a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("yellow");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("yellow blue light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle5a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink blue light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle6a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("yellow");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink blue yellow");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle7a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("yellow");
    }
    if (count == 8) {
      $(this).addClass("light_pink");
    }
    if (count == 10) {
      $(this).removeClass("dark_pink blue yellow light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle8a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("yellow");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink blue yellow");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle9a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("yellow");
    }
    if (count == 8) {
      $(this).addClass("light_pink");
    }
    if (count == 10) {
      $(this).removeClass("dark_pink blue yellow light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle10a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("yellow");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink yellow light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle11a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("yellow");
    }
    if (count == 8) {
      $(this).addClass("light_pink");
    }
    if (count == 10) {
      $(this).removeClass("dark_pink blue yellow light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle12a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink blue light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle13a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("yellow");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("yellow blue light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle14a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink blue light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle15a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("yellow");
    }
    if (count == 6) {
      $(this).addClass("light_pink");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink yellow light_pink");
    }
  });
});

$(function () {
  let count = 0;
  $('.circle16a').click(function () {
    count += 2;
    if (count == 2) {
      $(this).addClass("dark_pink");
    }
    if (count == 4) {
      $(this).addClass("blue");
    }
    if (count == 6) {
      $(this).addClass("yellow");
    }
    if (count == 8) {
      $(this).removeClass("dark_pink blue yellow");
    }
  });
});

$(document).ready(function(){
	$(".circle14a, .circle12a, .circle5a, .circle3a").click(function(){
		$(this).css({
			width: function(index, value) {
				return parseFloat (value) +20;
      }
		});
    $(this).css({
			height: function(index, value) {
				return parseFloat (value) +20;
			}
		});
	});
});


$(document).ready(function(){
	$(".textblock3").click(function(){
		$(".screen2").show();
	});
  $(".textblock3").click(function(){
		$(".screen1").hide();
	});
});


$(document).ready(function(){
	$(".text1a").click(function(){
		$(".screen2").hide();
	});
  $(".text1a").click(function(){
		$(".screen1").show();
	});
});


$(document).ready(function(){
	$(".circle2a, .circle10a, .circle15a, .circle8a").click(function(){
		$(this).css({
			width: function(index, value) {
				return parseFloat (value) -20;
      }
		});
    $(this).css({
			height: function(index, value) {
				return parseFloat (value) -20;
			}
		});
	});
});


$(document).ready(function(){
  $("#helpimg1b").on('click', function(){
    $('#screen3_2').show();
  });
});
$(document).ready(function(){
  $("#okbotton_main").on('click', function(){
    $('#screen3_2').hide();
  });
});

$(function () {
  let count = 0;
  $('.figimg1a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).css('background-image', 'url(images/button.svg)');
    }
    if (count == 3) {
      $(this).css('background-image', 'url(images/line.svg)');
    }
    if (count == 4) {
      $(this).css('background-image', 'url(images/needle.svg)');
    }
  });
});
$(function () {
  let count = 0;
  $('.figimg2a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).css('background-image', 'url(images/button.svg)');
    }
    if (count == 3) {
      $(this).css('background-image', 'url(images/line.svg)');
    }
    if (count == 4) {
      $(this).css('background-image', 'url(images/needle.svg)');
    }
  });
});
$(function () {
  let count = 0;
  $('.figimg3a').click(function () {
    count += 1;
    if (count == 2) {
      $(this).css('background-image', 'url(images/button.svg)');
    }
    if (count == 3) {
      $(this).css('background-image', 'url(images/line.svg)');
    }
    if (count == 4) {
      $(this).css('background-image', 'url(images/needle.svg)');
    }
  });
});




$(document).ready(function(){
	$(".chooseimg1").click(function(){
    $(".circle1a, .circle6a, .circle16a").css("background-image",'url(images/choose1.svg)');
    $(".circle1a, .circle6a, .circle16a").css("background-color",'unset');
    $(".circle1a, .circle6a, .circle16a").css("background-position",'center');
	});
});
$(document).ready(function(){
	$(".chooseimg2").click(function(){
    $(".circle1a, .circle6a, .circle16a").css("background-image",'url(images/choose2.svg)');
    $(".circle1a, .circle6a, .circle16a").css("background-color",'unset');
    $(".circle1a, .circle6a, .circle16a").css("background-position",'center');
	});
});
$(document).ready(function(){
	$(".chooseimg3").click(function(){
    $(".circle1a, .circle6a, .circle16a").css("background-image",'url(images/choose3.svg)');
    $(".circle1a, .circle6a, .circle16a").css("background-color",'unset');
    $(".circle1a, .circle6a, .circle16a").css("background-position",'center');
	});
});
$(document).ready(function(){
	$(".chooseimg4").click(function(){
    $(".circle1a, .circle6a, .circle16a").css("background-image",'url(images/choose4.svg)');
    $(".circle1a, .circle6a, .circle16a").css("background-color",'unset');
    $(".circle1a, .circle6a, .circle16a").css("background-position",'center');
	});
});
$(document).ready(function(){
	$(".chooseimg5").click(function(){
    $(".circle1a, .circle6a, .circle16a").css("background-image",'url(images/choose5.svg)');
    $(".circle1a, .circle6a, .circle16a").css("background-color",'unset');
    $(".circle1a, .circle6a, .circle16a").css("background-position",'center');
	});
});
$(document).ready(function(){
	$(".chooseimg6").click(function(){
    $(".circle1a, .circle6a, .circle16a").css("background-image",'url(images/choose6.svg)');
    $(".circle1a, .circle6a, .circle16a").css("background-color",'unset');
    $(".circle1a, .circle6a, .circle16a").css("background-position",'center');
	});
});
