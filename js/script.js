/* Author: Felipe Lima

*/

$(function() {
  $(".container")
    .draggable({ handle: ".filename"})
    .resizable();

  $('.container.vim').css({ 
    'left': '50%', 
    'margin-left': - ($(".container").width() / 2),
    'margin-top': '50px'
  });

  $('.container.chrome').css({ 
    'left': '30%', 
    'margin-left': - ($(".container").width() / 3),
    'margin-top': '10px'
  });

  $('.container .filename').click(function() {
    $('.container').css('z-index', 1);
    $(this).parent().parent().css('z-index', 2);
  });

  var resizeTimeout = null;

  $(window).resize(function() {
    if(resizeTimeout) clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function() {
      $(".container.chrome").animate({ 
        'margin-left': - ($(".container").width() / 3) 
      }, 500);
    }, 500);
  });

  var resizeVimTimeout = null;

  $(window).resize(function() {
    if(resizeVimTimeout) clearTimeout(resizeVimTimeout);

    resizeVimTimeout = setTimeout(function() {
      $(".container.vim").animate({ 
        'margin-left': - ($(".container").width() / 2) 
      }, 500);
    }, 500);
  });

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
