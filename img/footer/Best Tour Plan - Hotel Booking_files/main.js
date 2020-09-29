var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".hotel-slider__button--prev",
    nextEl: ".hotel-slider__button--next",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: ".reviews-slider__button--prev",
    nextEl: ".reviews-slider__button--next",
  },
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [-20.308415, 57.367221],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter());

    myMap.geoObjects.add(myPlacemark);

}

