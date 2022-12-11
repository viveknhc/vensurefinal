(function ($) {
  "use strict";
  $(function () {
    $('[data-toggle="offcanvas"]').on("click", function () {
      $(".sidebar-offcanvas").toggleClass("active");
    });
  });
})(jQuery);



// clipboard
function clipboard(elem, event) {
  elem.prev('input[type="text"]').focus().select();
  document.execCommand(event);
  elem.prev('input[type="text"]').blur();
  elem.addClass("clicked");
  setTimeout(function () {
    elem.removeClass("clicked");
  }, 500);
}

$(".btn-copy").on("click", function () {
  clipboard($(this), "copy");
});

$(".btn-cut").on("click", function () {
  clipboard($(this), "cut");
});
