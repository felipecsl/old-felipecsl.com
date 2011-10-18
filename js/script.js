/* Author: Felipe Lima

*/

$(function() {
  $("#container").draggable({ handle: ".filename"});
  $("#container").resizable();
  $(".tab").click(function() {
    if($(this).hasClass("active")) return;
    $(".tab.active-prev").removeClass("active-prev");
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active").prev().addClass("active-prev");
  });
});

now.ready(function(){
  //now.logStuff("Teu CU!");
});
