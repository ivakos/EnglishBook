(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('nav')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('nav')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);