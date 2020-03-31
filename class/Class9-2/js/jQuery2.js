$(document).ready( function(){


$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide();
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show();
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <strong>World</strong>!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});



// --------------------- Debug #4 ----------------------------

// Here goes your jQuery :

$("#_debughide").click(function(){
  $(".smallGridBug div:first-child p").hide();
});

$("#_debugshow").click(function(){
  $(".smallGridBug div:first-child p").show();
});

$("#_debugtoggle").click( function(){
  $(".smallGridBug div:nth-child(2) p").toggle();
});

$("#_debughtml").click(function() {
  $(".smallGridBug div:nth-child(3) p").html("Hello! I changed the HTML to a different text!");
});

$("#_debugcss").click(function(){
  $(".smallGridBug div:nth-child(4) p").css("background-color", "purple");
});


});
