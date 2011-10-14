/* Author: Felipe Lima

*/

$(function() {
  $("#container").draggable({ handle: ".filename"});
  $("#container").resizable();
  $(".tab").click(function() {
    if($(this).hasClass("active")) return;
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
  });
});

now.ready(function(){
  //now.logStuff("Teu CU!");
});
