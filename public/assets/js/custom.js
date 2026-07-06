window.studiovaAosInitialized = false;

window.initFeaturedCarousel = function () {
  var $carousel = $(".featured-projects-slider .owl-carousel");
  if (!$carousel.length) return;

  $carousel.each(function () {
    var $el = $(this);
    if ($el.data("owl.carousel")) {
      $el.owlCarousel("destroy");
    }
  });

  $carousel.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
};

window.initStudiovaCounts = function () {
  $(".count").each(function () {
    var $this = $(this);
    if ($this.data("count-animated")) return;

    $this.data("count-animated", true);
    $this.prop("Counter", 0).animate(
      {
        Counter: $this.text(),
      },
      {
        duration: 1000,
        easing: "swing",
        step: function (now) {
          $this.text(Math.ceil(now));
        },
      }
    );
  });
};

window.refreshStudiovaAos = function () {
  if (typeof AOS === "undefined") return;

  if (!window.studiovaAosInitialized) {
    AOS.init({
      once: true,
    });
    window.studiovaAosInitialized = true;
  } else {
    AOS.refreshHard();
  }
};

window.initStudiova = function () {
  window.initFeaturedCarousel();
  window.initStudiovaCounts();
  window.refreshStudiovaAos();
};

$(function () {
  window.initStudiova();
});
