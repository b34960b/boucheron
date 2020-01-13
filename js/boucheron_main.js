(function($){
  const win = $(window);
  const gnb = $('.navigation');
const viewBox = $('#viewBox');
  const headBox = $('#headBox');
  let viewBoxOff = viewBox.offset().top;

  win.on('scroll', function(){
    let winScroll = win.scrollTop();
    if(winScroll > viewBoxOff){
      headBox.addClass('action');
      gnb.hide();
    }else{
      headBox.removeClass('action');
      gnb.show();
    }
  });




})(jQuery);