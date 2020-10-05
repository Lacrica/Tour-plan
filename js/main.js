$(document).ready(function () {
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
  
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom_visible");
  });
   
  
  $('input[name=phone]').mask("+7 (999) 999-99-99");
  
  $(".form").each(function () {
      $(this).validate({
        errorClass: "invalid invalid__email",
        messages: {
          name: {
            required: "Please enter your name.",
            minlength: "The name must be more than two characters",
          },
          email: {
            required: "Please enter your email.",
          },
          phone: {
            required: "Enter your phone number.",
          },
        },
    });
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  
  

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  };
  

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };

  $(document).keyup(function(e) { 
    if (e.keyCode == 27) { 
       $('.modal__overlay').removeClass('modal__overlay--visible');
       $('.modal__dialog').removeClass('modal__dialog--visible');
    } 
  });

});