$(document).ready( function(){


$("#_hide").click(function(){
  $(".stepGrid div:first-child").hide();
});

$("#_show").click(function(){
  $(".stepGrid div:first-child").show();
});

$("#_toggle").click( function(){
  $(".stepGrid div:nth-child(3)").toggle();
});

$("#_html").click(function() {
  $(".stepGrid div:nth-child(5)").html("Put a cast iron pan on the stove and set it to medium heat.");
});

$("#_css").click(function(){
  $(".stepGrid div:nth-child(7)").css("background-color", "rgb(181, 8, 152)");
});

$("#_css2").click(function(){
  $(".stepGrid div:nth-child(9)").css("background-color", "rgb(145, 143, 242)");
});

$("header").mouseover(function(){
    $("header h1").html("How to make a Grilled Cheese!");
});

$("header").mouseleave(function() {
  $("header h1").html("Let's get started!");
});


});
