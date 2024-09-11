function scroller() {
    $(".smooth").on("scroll", function() {
      let scrollPos = $(this).scrollTop();
      $(".parallax").css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 200
      });
    });
  }
  scroller();