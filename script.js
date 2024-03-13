$(function() {
  var $fancyboxGallery = $('[data-fancybox="gallery"]');
  $fancyboxGallery.fancybox({
  loop: true,
  buttons: ['slideShow', 'share', 'zoom', 'fullScreen', 'download', 'close'],
  protect: true
  });
  });
  