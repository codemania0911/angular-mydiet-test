  //
  $(".carousel").carousel({
    interval: false
  });

$(".svg-select").click(function() {
  if($(this).hasClass("checked")) {
    $(this).removeClass("checked");
  } else {
    $(this).addClass("checked");
  }
})
