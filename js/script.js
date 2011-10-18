/* Author: Felipe Lima

*/

$(function() {
  $("#container").draggable({ handle: ".filename"});
  $("#container").resizable();
  $(".tab").click(function() {
    var elem = $(this);
    if(elem.hasClass("active")) return;
    $(".tab.active-prev").removeClass("active-prev");
    elem.siblings().removeClass("active");
    elem.toggleClass("active").prev().addClass("active-prev");
    changeTab(elem.text());
  });

  $("body").keyup(function(e) {
    if(e.keyCode == 9){ //tab
      console.log(e.shiftKey);
      var next = $(".tab.active").next();
      if(next.hasClass("tab")) {
        next.click();
      }
      else {
        $(".tab").first().click().focus();
      }
      return false;
    }
    else if(e.keyCode == 186 && e.shiftKey) { // : key
      $(".command-input").focus().val(":");
    }
    else if(e.keyCode == 27) { // esc key
      $(".command-input").blur().val("");
    }
  });
});

now.ready(function(){
  //now.logStuff("Teu CU!");
});

function changeTab(name) {
  if(name == "resume.html") {
    $("#projects, #blog").hide();
    $("#resume").show();
  }
  else if(name == "projects.html") {
    $("#resume, #blog").hide();
    $("#projects").show();
  }
  else {
    $("#projects, #blog").hide();
    $("#blog").show();
  }
}
