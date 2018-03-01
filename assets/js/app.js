$(function() {
  $("a").hover(function() {
    $(this).find("img").animate({ opacity: "0.7" }, 300);
  }, function() {
    $(this).find("img").animate({ opacity: "1" }, 300);
  })
})
