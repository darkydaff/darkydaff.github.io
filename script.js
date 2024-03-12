$(document).ready(function() {
  $("[data-fancybox='gallery']").fancybox({
    loop: true,
    buttons: ["slideShow", "share", "zoom", "fullScreen", "download", "close"],
    protect: true,
  });
});
