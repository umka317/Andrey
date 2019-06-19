
$(document).ready(function() {

  $(".row:last").on('click', function() {       //при клику на инпуты выскакивает модальное окно
    $('.row:last').hide(600);
    $('.overlay').fadeIn(500);
    $('.modal').slideDown(600);
  });

  $('.close').on('click', function() {          //нажымаем на крестик - пропадает модальное окно
    $('.modal').slideUp(600);
    $('.overlay').fadeOut(500);
    $('.row:last').show(600);
  });

  $('li:nth-child(2)').on('click', function() {         //элемент li
    $('.row:last').hide(600);
    $('.overlay').fadeIn(500);
    $('.modal').slideDown(600);
  })

})